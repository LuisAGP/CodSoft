import React from 'react'
import '../../static/css/header.css'
import menuIcon from '../../static/images/menu.svg'
import {Link} from 'react-router-dom'

const Header = (props) => {


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
                <Link to="/">Home</Link>
                <Link to="#" onClick={e => window.location.href = "/logout"}>Logout</Link>
            </div>

            <div className="menu-tools hide" id="menu" tabIndex="0" onBlur={() => document.getElementById('menu').className="menu-tools hide"}>
                <h3>{"< OpiCloud />"}</h3>

                <div className="menu-options">
                    <Link to="#">Option 1</Link>
                    <Link to="#">Option 2</Link>
                    <Link to="#">Option 3</Link>
                    <Link to="#">Option 4</Link>
                    <Link to="#">Option 5</Link>
                    <Link to="#">Option 6</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
