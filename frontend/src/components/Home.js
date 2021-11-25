import React from 'react'
import DotsIcon from './icons/DotsIcon'
import Layout from './Layout'
import '../../static/css/home.css';
import FolderIcon from './icons/FolderIcon';
import FillStarIcon from './icons/FillStarIcon';
import { fetchData, isImage, urlBase, isVideo } from '../tools/app';
import LeftRowIcon from './icons/LeftRowIcon';
import pdfIcon from '../../static/images/icons/pdf.svg'
import excelIcon from '../../static/images/icons/excel.svg'
import docIcon from '../../static/images/icons/word.svg'
import powerpointIcon from '../../static/images/icons/powerpoint.svg'
import winrarIcon from '../../static/images/icons/winrar.svg'
import unknowIcon from '../../static/images/icons/file.svg'
import { generalContext } from './context/GeneralProvideer';
import Modal from './utils/Modal';
import ImageViewer from './utils/ImageViewer';


const Home = () => {

    const {setAlert, setModal, viewer, setViewer} = React.useContext(generalContext);
    const [previousRoute, setPreviousRoute] = React.useState("./");
    const [currentRoute, setCurrentRoute] = React.useState("./");
    const [currentFolder, setCurrentFolder] = React.useState("");
    const [folder, setFolder] = React.useState(null);
    const [file, setFile] = React.useState(null);
    const [fileName, setFileName] = React.useState(null);
    const [downloadUrl, setDonwloadUrl] = React.useState(null);
    const [images, setImages] = React.useState(null);
    const [idImage, setIdImage] = React.useState(null);


    const updateDirectory = async(route=null) => {

        route += route != null && route[route.length-1] != "/" ? '/' : '';

        let data = await fetchData({
            url: 'getDirectory/',
            method: "POST",
            data: {
                route: route
            }
        });

        setFolder(JSON.parse(data.folders));
        setFile(JSON.parse(data.files));
        setCurrentFolder(data.id_current_folder);


        let files = await JSON.parse(data.files);
        files = files && files.length > 0 ? files.filter(item => {
            return isImage(item.fields.file_extension);
        }) : null;

        files = files && files.length > 0 ? files.map(item => {
            return {
                id: item.pk,
                url: item.fields.prefix_url+item.fields.file_compress
            }
        }) : null;


        setImages(files);

    }


    const backDirectory = () => {
        let route = previousRoute;
        route += route != null && route[route.length-1] != "/" ? '/' : '';

        let prevRoute = route.split('/');
        prevRoute = prevRoute.slice(0, prevRoute.length-2);

        updateDirectory(route);
        setCurrentRoute(route);

        prevRoute.length > 0 && setPreviousRoute(prevRoute.join('/')+"/")
    }



    const openFolder = (e) => {
        let route = e.currentTarget.dataset.route;
        let prevRoute = e.currentTarget.dataset.folder_route;

        setCurrentRoute(route);
        setPreviousRoute(prevRoute);
        updateDirectory(route);
    }



    const checkRoute = (input) => {

        let route = input.value !== "" ? input.value : './';
        setCurrentRoute(route);
        updateDirectory(route);
        
    }



    const settings = () => {

        let menu = document.getElementById("menu-settings");
        let btn = menu.previousSibling;

        if (menu.className.includes("hidden")) {
            menu.className = menu.className.replace('hidden', '');
            menu.focus();
            btn.className = "btn-settings btn-active";
            btn.style.pointerEvents = "none";
        }else{
            menu.className = 'menu-settings hidden';
            btn.className = "btn-settings";
            btn.style = "";
        }
    }



    const uploadFiles = async(e) => {
        if (!e) { return false; }

        let data = e.target.files;
        data['route'] = currentRoute;
        data['id_folder'] = currentFolder;

        let response = await fetchData({
            url: 'uploadFiles/',
            method: 'POST',
            data: data
        })

        if (response.status === 200) {

            setAlert({
                status: 'show',
                message: response.message,
                type: "check"
            });

            let route = document.getElementById("route-field").value;
            updateDirectory(route)
            
        }else{

            setAlert({
                status: 'show',
                message: response.message,
                type: "alert"
            });

        }

    }


    const chargeFileToDownload = (e) => {

        let name = e.currentTarget.dataset.name;
        let url = e.currentTarget.dataset.url;

        setFileName(name);
        setDonwloadUrl(url);
        setModal({
            id_modal: 'modal-donwload',
            visible: true
        });

    }



    const donwloadFile = () => {

        var a = document.createElement("a");
        a.href = downloadUrl;
        a.setAttribute("download", fileName);
        a.click();

    }


    const switchImageFile = (fileType) => {

        if (isImage(fileType)) {
            return false;
        }

        if (isVideo(fileType)) {
            return false;
        }

        switch(fileType){
            case 'pdf': 
                return pdfIcon;
            case 'xls': case 'xlsx': 
                return excelIcon;
            case 'doc': case 'docx': 
                return docIcon;
            case 'ppt': case 'pptx': 
                return powerpointIcon;
            case 'zip': case 'rar': 
                return winrarIcon;
            default: 
                return unknowIcon;
        }

    }


    const deleteAllFiles = async() => {

        let response = await fetchData({
            url: 'deleteAllFiles/',
            method: 'POST'
        });

        if (response.status === 200) {
            setAlert({
                status: 'show',
                message: response.message,
                type: "check"
            });
        }

    }


    const viewPicture = (e) => {

        setIdImage(e.target.dataset.id_image);
        setViewer(true);

    }


    React.useEffect(() => {
        updateDirectory();
    }, []);


    return (
        <Layout>

            <div className="panel-tools">


                <div className="directory">
                    <div className="back-row" onClick={backDirectory}>
                        <LeftRowIcon width="35" height="35" fill="#4C6F93" />
                    </div>
                    
                    <div className="path" id="cloud-path">
                        <input 
                            type="text"
                            data-id_folder={currentFolder}
                            value={currentRoute} 
                            onChange={e => setCurrentRoute(e.target.value)}
                            onBlur={e => checkRoute(e.currentTarget)}
                            onKeyUp={e => e.keyCode === 13 && checkRoute(e.currentTarget)}
                            id="route-field"
                        />
                    </div>
                </div>

                <div className="setting">
                    <div>
                        <button onClick={settings} className="btn-settings" type="button">
                            <DotsIcon width="20" height="20" />
                        </button>

                        <div className="menu-settings hidden" tabIndex="1" id="menu-settings" onBlur={settings}>
                            <p>
                                <a onClick={e => setModal({id_modal:'modal-folder', visible: true})}>New Folder</a>
                            </p>
                            <p>
                                <a onClick={e => e.target.nextSibling.click()}>Upload files</a>
                                <input type="file" multiple onChange={e => uploadFiles(e)}/>
                            </p>
                            <p>
                                <a onClick={deleteAllFiles}>Delete All Files</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="storage-content">

                {
                    folder != null && (
                        folder.map((item, index) => {
                            return (
                                <div 
                                    className="storage-item" 
                                    key={index}
                                    data-route={item.fields.folder_route+item.fields.folder_name+"/"}
                                    data-id_folder={item.pk}
                                    data-folder_route={item.fields.folder_route}
                                    onClick={e => openFolder(e)}
                                >
                                    {
                                        item.fields.favorite && (
                                            <div className="icon">
                                                <FillStarIcon width="15" height="15" fill="#FFC700"/>
                                            </div>
                                        )
                                    }
                                    <FolderIcon width="140" height="140" fill="#F7DC6F"/>
                                    <div className="folder-info">
                                        <span>{item.fields.folder_name}</span> 
                                    </div>
                                </div>
                            )
                        })
                    )
                }


                {
                    file != null && (
                        file.map((item, index) => {
                            return (
                                <div 
                                    className="storage-item" 
                                    key={index}
                                >
                                    {
                                        item.fields.favorite && (
                                            <div className="icon">
                                                <FillStarIcon width="15" height="15" fill="#FFC700"/>
                                            </div>
                                        )
                                    }
                                    {/*I******************************************** IMG FILE **********************************************/}
                                    { 
                                        isImage(item.fields.file_extension) && <img 
                                                                                    decoding="async" 
                                                                                    src={item.fields.prefix_url+item.fields.file_compress} 
                                                                                    alt="IMAGE" 
                                                                                    className={item.fields.orientation}
                                                                                    data-id_image={item.pk}
                                                                                    onClick={e => viewPicture(e)}
                                                                                /> 
                                    }
                                    {/*E******************************************** IMG FILE **********************************************/}

                                    {
                                        isVideo(item.fields.file_extension) && <video controls play="true">
                                                                                    <source src={item.fields.prefix_url+item.fields.file} />
                                                                                    Your browser does not support the video tag.
                                                                                </video>
                                    }

                                    {/*I******************************************* OTHER FILE ********************************************/}
                                    {
                                        switchImageFile(item.fields.file_extension.toLowerCase()) && <>
                                            <img 
                                                src={switchImageFile(item.fields.file_extension.toLowerCase())} 
                                                alt="PDF" 
                                                className="doc"
                                                data-name={item.fields.file_name}
                                                data-url={urlBase+item.fields.prefix_url+item.fields.file} 
                                                onClick={e => chargeFileToDownload(e)}
                                            />
                                            <div className="folder-info">
                                                <span>{item.fields.file_name}</span> 
                                            </div>
                                        </>
                                    }
                                    {/*E******************************************* OTHER FILE ********************************************/}

                                </div>
                            )
                        })
                    )
                }
                

            </div>

            {/*I****************************************** MODAL SECTION *******************************************/}

            <Modal 
                id="modal-folder"
                url="createNewFolder/" 
                button="Create" 
                title="Create a new folder" 
                subtitle={`Route: ${currentRoute}`}
                afterSubmit={updateDirectory}
                params={currentRoute}
            >

                <div className="modal-field">
                    <label htmlFor="folder_name">Folder name:</label>
                    <input 
                        type="text" 
                        name="folder_name" 
                        pattern="(\w|ñ)+" 
                        title="Do not support space and special caracters" 
                        required
                    />
                </div>

                <input type="hidden" name="id_folder" defaultValue={currentFolder} />

            </Modal>



            <Modal
                id="modal-donwload"
                url="" 
                button="Download" 
                cancel={true}
                title="Download File" 
                subtitle={`File: ${fileName}`}
                afterSubmit={donwloadFile}
            >

                <p className="center">Are you sure to download "{fileName}" ?</p>
                
            </Modal>


            <ImageViewer images={images} id={idImage} />


            {/*E****************************************** MODAL SECTION *******************************************/}

        </Layout>
    )
}

export default Home
