import React from 'react'

const generalContext = React.createContext()

const GeneralContextProvideer = ({ children }) => {

    const [alert, setAlert] = React.useState({
        status: 'hide',
        message: '',
        type: 'info'
    });

    const [modal, setModal] = React.useState({
        id_modal: '',
        visible: false
    });

    const [viewer, setViewer] = React.useState(false);

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
        <generalContext.Provider 
            value={{
                alert, 
                setAlert, 
                modal, 
                setModal,
                viewer, 
                setViewer
            }} 
        >
            { children }
        </generalContext.Provider>
    )

}


export { generalContext, GeneralContextProvideer }