import React from 'react'
import DotsIcon from './icons/DotsIcon'
import Layout from './Layout'
import '../../static/css/home.css';
import FolderIcon from './icons/FolderIcon';
import FillStarIcon from './icons/FillStarIcon';
import { fetchData, isImage, isUnknown } from '../tools/app';
import LeftRowIcon from './icons/LeftRowIcon';
import pdfIcon from '../../static/images/icons/pdf.svg'
import excelIcon from '../../static/images/icons/excel.svg'
import docIcon from '../../static/images/icons/word.svg'
import powerpointIcon from '../../static/images/icons/powerpoint.svg'
import winrarIcon from '../../static/images/icons/winrar.svg'
import unknowIcon from '../../static/images/icons/file.svg'
import { generalContext } from './context/GeneralProvideer';
import Modal from './utils/Modal';


const Home = () => {

    const {setAlert, setModal} = React.useContext(generalContext);
    const [previousRoute, setPreviousRoute] = React.useState("./");
    const [currentRoute, setCurrentRoute] = React.useState("./");
    const [currentFolder, setCurrentFolder] = React.useState("");
    const [folder, setFolder] = React.useState(null);
    const [file, setFile] = React.useState(null);


    const updateDirectory = async(route=null) => {

        route += route != null && route[route.length-1] != "/" ? '/' : '';

        let data = await fetchData({
            url: 'getDirectory/',
            method: "POST",
            data: {
                route: route
            }
        })


        setFolder(JSON.parse(data.folders));
        setFile(JSON.parse(data.files));
        setCurrentFolder(data.id_current_folder);

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


    React.useEffect(() => {
        updateDirectory();
    }, []);


    return (
        <Layout>
            <Modal 
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
                                <a onClick={e => setModal({visible: true})}>New Folder</a>
                            </p>
                            <p>
                                <a onClick={e => e.target.nextSibling.click()}>Upload files</a>
                                <input type="file" multiple onChange={e => uploadFiles(e)}/>
                            </p>
                            <p>More</p>
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
                                    <FolderIcon width="100" height="100" fill="#F7DC6F"/>
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
                                                                                    src={item.fields.prefix_url+item.fields.file} 
                                                                                    alt="IMAGE" 
                                                                                    className={item.fields.orientation}
                                                                                /> 
                                    }
                                    {/*E******************************************** IMG FILE **********************************************/}


                                    {/*I******************************************** PDF FILE **********************************************/}
                                    {
                                        item.fields.file_extension.toLowerCase() == "pdf" && <>
                                            <img decoding="async" src={pdfIcon} alt="PDF" className="doc" />
                                            <div className="folder-info">
                                                <span>{item.fields.file_name}</span> 
                                            </div>
                                        </>
                                    }
                                    {/*E******************************************** PDF FILE **********************************************/}


                                    {/*I******************************************* EXCEL FILE *********************************************/}
                                    {
                                        ['xls', 'xlsx'].includes(item.fields.file_extension.toLowerCase()) && <>
                                            <img decoding="async" src={excelIcon} alt="XLS" className="doc" />
                                            <div className="folder-info">
                                                <span>{item.fields.file_name}</span> 
                                            </div>
                                        </>
                                    }
                                    {/*E******************************************* EXCEL FILE *********************************************/}


                                    {/*I******************************************** DOC FILE **********************************************/}
                                    {
                                        ['doc', 'docx'].includes(item.fields.file_extension.toLowerCase()) && <>
                                            <img decoding="async" src={docIcon} alt="DOC" className="doc" />
                                            <div className="folder-info">
                                                <span>{item.fields.file_name}</span> 
                                            </div>
                                        </>
                                    }
                                    {/*E******************************************** DOC FILE **********************************************/}


                                    {/*I**************************************** POWERPOINT FILE *******************************************/}
                                    {
                                        ['ppt', 'pptx'].includes(item.fields.file_extension.toLowerCase()) && <>
                                            <img decoding="async" src={powerpointIcon} alt="PTT" className="doc" />
                                            <div className="folder-info">
                                                <span>{item.fields.file_name}</span> 
                                            </div>
                                        </>
                                    }
                                    {/*E**************************************** POWERPOINT FILE *******************************************/}


                                    {/*I***************************************** ZIP, RAR FILES *******************************************/}
                                    {
                                        ['zip', 'rar'].includes(item.fields.file_extension.toLowerCase()) && <>
                                            <img decoding="async" src={winrarIcon} alt="winrar" className="doc" />
                                            <div className="folder-info">
                                                <span>{item.fields.file_name}</span> 
                                            </div>
                                        </>
                                    }
                                    {/*E***************************************** ZIP, RAR FILES *******************************************/}


                                    {/*I****************************************** UNKNOWN FILES *******************************************/}
                                    {
                                        isUnknown(item.fields.file_extension.toLowerCase()) && <>
                                            <img decoding="async" src={unknowIcon} alt="Unknown" className="doc" />
                                            <div className="folder-info">
                                                <span>{item.fields.file_name}</span> 
                                            </div>
                                        </>
                                    }
                                    {/*E****************************************** UNKNOWN FILES *******************************************/}

                                </div>
                            )
                        })
                    )
                }


            </div>

        </Layout>
    )
}

export default Home
