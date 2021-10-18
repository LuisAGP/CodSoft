import React from 'react'
import DotsIcon from './icons/DotsIcon'
import Layout from './Layout'
import '../../static/css/home.css';
import FolderIcon from './icons/FolderIcon';
import FillStarIcon from './icons/FillStarIcon';
import { fetchData } from '../tools/app';
import { showMessage } from './context/MessageProvideer';
import LeftRowIcon from './icons/LeftRowIcon';

const Home = () => {

    const {alert, setAlert} = React.useContext(showMessage);
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

        console.log(data)
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


    
    React.useEffect(() => {
        updateDirectory();
    }, []);



    const openFolder = (e) => {
        let route = e.currentTarget.dataset.route;
        let prevRoute = e.currentTarget.dataset.folder_route;

        setCurrentRoute(route);
        setPreviousRoute(prevRoute);
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
            
        }else{

            setAlert({
                status: 'show',
                message: response.message,
                type: "alert"
            });

        }

    }






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
                            onBlur={e => updateDirectory(e.target.value)}
                            onKeyUp={e => e.keyCode === 13 && updateDirectory(e.target.value)} 
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
