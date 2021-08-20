import React from 'react'
import '../../static/css/header.css'
import menuIcon from '../../static/images/menu.svg'
import {Link} from 'react-router-dom'

const Header = () => {


    const showMenu = () => {

        let menu = document.getElementById('menu');
        menu.className = menu.className === "menu-tools hide" ? "menu-tools show" : "menu-tools hide";
        menu.focus()

    }

    return (
        <div className="header">
            <div className="menu-icon">
                <img src={menuIcon} alt="Menu_icon" onClick={ () => showMenu()}/>
            </div>
            
            <div className="options">
                <Link to="/">Get Started</Link>
                <Link to="/">Home</Link>
            </div>

            <div className="menu-tools hide" id="menu" tabIndex="0" onBlur={() => document.getElementById('menu').className="menu-tools hide"}>
                <h3>{"< CODING TOOLS />"}</h3>

                <div className="menu-options">
                    <Link to="/example">Modal Maker</Link>
                    <Link to="#">Box-Shadow Calculator</Link>
                    <Link to="#">Button generator</Link>
                    <Link to="#">General Ajax function</Link>
                    <Link to="#">Image Reziser</Link>
                    <Link to="#">Table Generator</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
