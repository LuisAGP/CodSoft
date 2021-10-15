import React from 'react'

const showMessage = React.createContext()

const ShowMessageProvideer = ({ children }) => {

    const [status, setStatus] = React.useState('hide');


    /**
     * Condition to hide the alert after 2.5 secons
     * @author Luis GP
     */
    if(status == "show"){
        let alert = setInterval(() => {
            setStatus('hide');
            clearInterval(alert)
        }, 2500);
    }

    return (
        <showMessage.Provider value={{status, setStatus}} >
            { children }
        </showMessage.Provider>
    )

}


export { showMessage, ShowMessageProvideer }