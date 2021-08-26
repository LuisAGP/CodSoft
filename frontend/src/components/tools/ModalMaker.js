import React from 'react'
import '../../../static/css/tools/modalmaker.css'
import closeIcon from '../../../static/images/close.svg'

const ModalMaker = () => {
    return (
        <div>
            <div className="page-title">
                <h2>Generate your ideal model!</h2>
            </div>

            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aut tempore, ut cumque tenetur quis veritatis. Molestias consequuntur soluta, porro veniam iure ab molestiae obcaecati vero, impedit repudiandae at ipsam.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis sed repudiandae amet facilis. Minima eaque in alias ullam. Possimus adipisci dolor accusantium qui corrupti nisi suscipit ullam tempora, itaque perspiciatis.</p>
            </div>


            <div className="control-panel">

            </div>



            <div className="modal-content">
                <div className="modal" id="modal-1">
                    <div className="head">
                        <h4>Modal Example</h4>

                        <a href="#">
                            <img src={closeIcon} alt="" />
                        </a>
                        
                    </div>

                    <div className="body">
                        ...
                    </div>

                    <div className="footer">
                        <button>SEND</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ModalMaker
