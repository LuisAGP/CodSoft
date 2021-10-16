import React from 'react'

const showMessage = React.createContext()

const ShowMessageProvideer = ({ children }) => {

    const [alert, setAlert] = React.useState({
        status: 'hide',
        message: '',
        type: 'info'
    });


    /**
     * Condition to hide the alert after 2.5 secons
     * @author Luis GP
     */
    if(alert.status == "show"){
        let timer = setInterval(() => {
            setAlert({
                ...alert,
                status: 'hide'
            });
            clearInterval(timer)
        }, 2500);
    }

    return (
        <showMessage.Provider value={{alert, setAlert}} >
            { children }
        </showMessage.Provider>
    )

}


export { showMessage, ShowMessageProvideer }