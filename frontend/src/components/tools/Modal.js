import React from 'react'
import closeIcon from '../../../static/images/close.svg'

const Modal = (props) => {
    return (
        <div className="modal-content-closed">
            <div className="modal modal-closed" id="modal-1">
                <div className="head">
                    <h4>Modal Example</h4>

                    <a href="#" onClick={props.fun}>
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
    )
}

export default Modal
