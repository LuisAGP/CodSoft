import React from 'react'
import DotsIcon from './icons/DotsIcon'
import Layout from './Layout'
import '../../static/css/home.css';

const Home = () => {
    return (
        <Layout>
            <div className="panel-tools">
                <div className="path" id="cloud-path">
                    <input type="text" defaultValue="./Home/Folder"/>
                </div>

                <div className="setting">
                    <DotsIcon width="20" height="20" />
                </div>
            </div>
        </Layout>
    )
}

export default Home
