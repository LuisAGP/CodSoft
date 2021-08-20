import React from 'react'
import logo from '../../static/images/icon.svg';
import '../../static/css/home.css';

const Home = () => {
    return (
        <div className="home">

            <div className="col-4-2 mw-80">

                <div className="main">
                    <h1 className="phrase">TOOLS FOR HTML, JAVASCRIPT AND CSS</h1>
                </div>

                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="main">
                    <p>
                        This is a modern way to design and style your components while 
                        maintaining your creativity and seeing changes instantly. 
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Home
