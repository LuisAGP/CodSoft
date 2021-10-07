import React from 'react'
import Header from './Header'
import '../../static/css/index.css'

const Layout = (props) => {
    return (
        <div className="body">
            <Header />
            { props.children }
        </div>
    )
}

export default Layout
