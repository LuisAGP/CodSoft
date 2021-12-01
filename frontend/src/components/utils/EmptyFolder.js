import React from 'react'

const EmptyFolder = () => {

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
            <span>This folder is empty!</span>
        </div>
    )
}

export default EmptyFolder
