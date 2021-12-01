import React from 'react'

const NotExists = () => {

    const main = {
        width: '100%',
        height: 'calc(100vh - 10rem)',
        color: "gray",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <div style={main}>
            This folder doesn't exists!
        </div>
    )
}

export default NotExists
