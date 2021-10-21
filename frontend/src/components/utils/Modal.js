import React from 'react'
import { fetchData, removeLoader, setLoader } from '../../tools/app';
import { generalContext } from '../context/GeneralProvideer';
import '../../../static/css/tools/modal.css'
import xIcon from '../../../static/images/icons/x.svg'

const Modal = (props) => {

    const {setAlert, modal, setModal} = React.useContext(generalContext);
    const [btnSubmit, setBtnSubmit] = React.useState(null);


    const formSubmit = async(event) => {
        event.preventDefault();

        setLoader(btnSubmit)
        
        if(props.url == "" || props.url == null){
            return false;
        }

        let response = await fetchData({
            url: props.url,
            method: 'POST',
            data: new FormData(event.target)
        });

        console.log(response)

        if (response.status === 200) {

            setAlert({
                status: 'show',
                message: response.message,
                type: "check"
            });

            props.afterSubmit && props.afterSubmit(props.params);
            setModal({visible: false});
            removeLoader(props.button);
            setBtnSubmit(null);
            event.target.reset();
            
        }else{

            setAlert({
                status: 'show',
                message: response.message,
                type: "alert"
            });
            
            removeLoader(props.button);
            setBtnSubmit(null);

        }

    }


    const onClickBackground = (e) => {
            
        if (e.target.className.toString().includes("modal-background")) {
            setModal({visible: false});   
        }
        
    }



    return (
        <div className={modal.visible ? "modal-background" : "modal-background hide-background"} onClick={e => onClickBackground(e)}>
            <div className={modal.visible ? "modal-content" : "modal-content hide-content"}>
                <form onSubmit={e => formSubmit(e)}>



                    <div className="modal-header">
                        <h3>{props.title}</h3>
                        {
                            props.subtitle && <h6>{props.subtitle}</h6>
                        }

                        <div className="btn-close">
                            <img src={xIcon} onClick={e => setModal({visible: false})}/>
                        </div>
                    </div><hr />



                    <div className="modal-form">
                        { props.children }
                    </div><hr />



                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" onClick={e => setBtnSubmit(e.target)}>
                            {props.button}
                        </button>
                    </div>



                </form>
            </div>
        </div>
    )
}

export default Modal
