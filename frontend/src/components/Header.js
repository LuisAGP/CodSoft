import React from 'react'
import '../../static/css/header.css'
import menuIcon from '../../static/images/menu.svg'

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
                <a href="#">Get Started</a>
            </div>

            <div className="menu-tools hide" id="menu" tabIndex="0" onBlur={() => document.getElementById('menu').className="menu-tools hide"}>
                <h2>CodTools</h2>

                <div className="menu-options">
                    <a href="#">Modal Maker</a>
                    <a href="#">Box-Shadow Calculator</a>
                    <a href="#">Button generator</a>
                    <a href="#">General Ajax function</a>
                    <a href="#">Image Reziser</a>
                    <a href="#">Table Generator</a>
                </div>
            </div>
        </div>
    )
}

export default Header
