import React from 'react'
import Modal from './Modal'
import '../../../static/css/tools/modalmaker.css'

const ModalMaker = () => {

    const openModal = () => {

        let modal = document.getElementById('modal-1');
        let content = modal.parentNode;

        console.log(content.className, content.className == "modal-content-closed")

        if(content.className == "modal-content-closed"){
            content.className = "modal-content-opened";
            modal.className = "modal modal-opened";
        }else{
            content.className = "modal-content-closed";
            modal.className = "modal modal-closed";
        }

    }

    return (
        <div>
            <div className="page-title">
                <h2>Generate your ideal model!</h2>
            </div>



            <div className="description">

                <div className="body-modal">
                    <Modal fun={openModal} />
                    This is your body's page...
                </div>

                <div className="control-panel">
                    <button className="btn btn-primary" onClick={openModal}>
                        Try it!
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ModalMaker
