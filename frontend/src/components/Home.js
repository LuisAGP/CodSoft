import React from 'react'
import DotsIcon from './icons/DotsIcon'
import Layout from './Layout'
import '../../static/css/home.css';
import FolderIcon from './icons/FolderIcon';
import FillStarIcon from './icons/FillStarIcon';
import { fetchData } from '../tools/app'

const Home = () => {

    const [currentRoute, setCurrentRoute] = React.useState("");
    const [folder, setFolder] = React.useState(null);
    const [file, setFile] = React.useState(null);



    const updateDirectory = async(idFolder=null) => {

        let data = await fetchData({
            url: 'getFolders/',
            method: "POST",
            data: {
                id_folder: idFolder
            }
        })

        setFolder(data);
        console.log(data)
    }


    
    React.useEffect(() => {

        updateDirectory();

    }, []);



    const openFolder = (e) => {
        let id_folder = e.currentTarget.dataset.id_folder;
        setCurrentRoute(id_folder);
        updateDirectory(id_folder)
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
        data['id_folder'] = currentRoute;

        let response = fetchData({
            url: 'uploadFiles/',
            method: 'POST',
            data: data
        })

        console.log(await response);
    }






    return (
        <Layout>
            <div className="panel-tools">
                <div className="path" id="cloud-path">
                    <input type="text" defaultValue="./"/>
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
