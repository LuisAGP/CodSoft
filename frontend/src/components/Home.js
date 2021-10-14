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

    return (
        <Layout>
            <div className="panel-tools">
                <div className="path" id="cloud-path">
                    <input type="text" defaultValue="./Home/Folder"/>
                </div>

                <div className="setting">
                    <span>
                        <DotsIcon width="20" height="20" />
                    </span>
                </div>
            </div>
            
            <div className="storage-content">

                {
                    folder != null && (
                        folder.map((item, index) => {
                            return (
                                <div className="storage-item" key={index}>
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
