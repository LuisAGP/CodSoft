import React from 'react'
import '../../static/css/header.css'
import menuIcon from '../../static/images/menu.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="menu-icon">
                <img src={menuIcon} alt="" />
            </div>

            <div className="options">
                <a href="#">Modal Maker</a>
                <a href="#">Box-Shadow</a>
                <a href="#">Buttons</a>
                <a href="#">General Ajax</a>
                <a href="#">Image Reziser</a>
                <a href="#">Table Generator</a>
            </div>
        </div>
    )
}

export default Header
