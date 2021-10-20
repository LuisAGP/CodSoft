import React from 'react'
import Header from './Header'
import '../../static/css/index.css'
import Message from './utils/Message'
import { generalContext } from './context/GeneralProvideer'

const Layout = (props) => {

    const {alert, setAlert} = React.useContext(generalContext);

    return (
        <div className="body">
            <Header />
            <Message type={alert.type} message={alert.message} status={alert.status} />
            { props.children }
        </div>
    )
}

export default Layout
