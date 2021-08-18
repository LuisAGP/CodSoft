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
                <a href="#">Get Started</a>
            </div>

            <div className="menu-tools">
                <h2>CodTools</h2>

                <div className="menu-options">
                    <a href="#">Modal Maker</a>
                    <a href="#">Box-Shadow Calculator</a>
                    <a href="#">Button generator</a>
                    <a href="#">General Ajax</a>
                    <a href="#">Image Reziser</a>
                    <a href="#">Table Generator</a>
                </div>
            </div>
        </div>
    )
}

export default Header
