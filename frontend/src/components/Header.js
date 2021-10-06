import React from 'react'
import '../../static/css/header.css'
import menuIcon from '../../static/images/menu.svg'
import {Link} from 'react-router-dom'
import MemoryIcon from './icons/MemoryIcon'
import ClockIcon from './icons/ClockIcon'
import StarIcon from './icons/StarIcon'
import TrashIcon from './icons/TrashIcon'
import CloudIcon from './icons/CloudIcon'

const Header = (props) => {


    /**
     * Function to show and hide the left side menu
     * @author Luis GP
     * @returns {boolean}
     */
    const showMenu = () => {

        let menu = document.getElementById('menu');
        menu.className = menu.className === "menu-tools hide" ? "menu-tools show" : "menu-tools hide";
        menu.focus();

        return false;

    }



    /**
     * Function to change the svg color when the user give hover on the option
     * @author Luis GP
     * @param {Event} e
     * @param {Boolean} hover 
     * @returns {Boolean}
     */
    const changeColor = (e, hover) => {
        try {

            const svg = e.target.firstChild.querySelector("path");
            svg.style.fill = hover ? '#FFF' : '#4c4c4c';
            
            return false

        } catch (error) {
            return false;
        }
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
                <h3><CloudIcon width="50" height="50" fill="#1976d2" /></h3>

                <div className="menu-options">
                    <Link to="#" 
                        onMouseOver={e => changeColor(e, true)}
                        onMouseOut={e => changeColor(e, false)} 
                    >
                        <MemoryIcon width="25" height="25" />
                        Storage
                    </Link>
                    <Link to="#"
                        onMouseOver={e => changeColor(e, true)}
                        onMouseOut={e => changeColor(e, false)}
                    >
                        <ClockIcon width="25" height="25" />
                        Recently
                    </Link>
                    <Link to="#"
                        onMouseOver={e => changeColor(e, true)}
                        onMouseOut={e => changeColor(e, false)}
                    >
                        <StarIcon width="25" height="25" />
                        Favorites
                    </Link>
                    <Link to="#"
                        onMouseOver={e => changeColor(e, true)}
                        onMouseOut={e => changeColor(e, false)}
                    >
                        <TrashIcon width="25" height="25" />
                        Trash
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
