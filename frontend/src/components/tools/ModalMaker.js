import React from 'react'
import '../../../static/css/tools/modalmaker.css'
import closeIcon from '../../../static/images/close.svg'

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

            <h1>Prueba de servidor</h1>
            <h2>Prueba de servidor #2</h2>
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aut tempore, ut cumque tenetur quis veritatis. Molestias consequuntur soluta, porro veniam iure ab molestiae obcaecati vero, impedit repudiandae at ipsam.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis sed repudiandae amet facilis. Minima eaque in alias ullam. Possimus adipisci dolor accusantium qui corrupti nisi suscipit ullam tempora, itaque perspiciatis.</p>
            </div>


            <div className="control-panel">
                <button className="btn btn-primary" onClick={openModal}>
                    Try it!
                </button>
            </div>



            <div className="modal-content-closed">
                <div className="modal modal-closed" id="modal-1">
                    <div className="head">
                        <h4>Modal Example</h4>

                        <a href="#" onClick={openModal}>
                            <img src={closeIcon} alt="" />
                        </a>
                        
                    </div>

                    <div className="body">
                        ...
                    </div>

                    <div className="footer">
                        <button className="modal-btn btn-1">Yes</button>
                        <button className="modal-btn btn-2">No</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ModalMaker
