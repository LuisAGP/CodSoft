import React from 'react'
import DotsIcon from './icons/DotsIcon'
import Layout from './Layout'
import '../../static/css/home.css';
import FolderIcon from './icons/FolderIcon';
import FillStarIcon from './icons/FillStarIcon';
import { fetchData } from '../tools/app';
import { showMessage } from './context/MessageProvideer';

const Home = () => {

    const {alert, setAlert} = React.useContext(showMessage);

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

        console.log(data)
        setFolder(JSON.parse(data.folders));
        setFile(JSON.parse(data.files));
        setCurrentFolder(data.id_current_folder);

    }


    
    React.useEffect(() => {
        updateDirectory();
    }, []);



    const openFolder = (e) => {
        let route = e.currentTarget.dataset.route;

        setCurrentRoute(route);
        updateDirectory(route);
    }



    const settings = () => {
        let menu = document.getElementById("menu-settings");
        let span = menu.previousSibling;

        if (menu.className.includes("hidden")) {
            menu.className = menu.className.replace('hidden', '');
            menu.focus();
            span.className = "btn-active";
        }else{
            menu.className += 'hidden';
            span.className = "";
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
            
        }else{

            setAlert({
                status: 'show',
                message: response.message,
                type: "alert"
            });

        }

        console.log(response);
    }






    return (
        <Layout>
            <div className="panel-tools">
                <div className="path" id="cloud-path">
                    <input 
                        type="text"
                        data-id_folder={currentFolder}
                        value={currentRoute} 
                        onChange={e => setCurrentRoute(e.target.value)}
                        onBlur={e => updateDirectory(e.target.value)}
                        onKeyUp={e => e.keyCode === 13 && updateDirectory(e.target.value)} 
                        id="route-field"
                    />
                </div>

                <div className="setting">
                    <div>
                        <span onClick={settings}>
                            <DotsIcon width="20" height="20" />
                        </span>

                        <div className="menu-settings hidden" tabIndex="1" id="menu-settings" onBlur={settings}>
                            <p>New folder</p>
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
                                    onClick={e => openFolder(e)}
                                >
                                    {
                                        item.fields.favorite && (
                                            <div className="icon">
                                                <FillStarIcon width="15" height="15" fill="#FFC700"/>
                                            </div>
                                        )
                                    }
                                    <FolderIcon width="80" height="80" fill="#F7DC6F"/>
                                    <div className="folder-info">
                                        <span>{item.fields.folder_name}</span> 
                                    </div>
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
