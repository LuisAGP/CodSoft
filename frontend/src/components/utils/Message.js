import React from 'react'
import infoIcon from '../../../static/images/info.svg'
import advertenceIcon from '../../../static/images/advertence.svg'
import checkIcon from '../../../static/images/check.svg'
import '../../../static/css/tools/message.css'

const Message = (props) => {

    const [icon, setIcon] = React.useState(false);

    React.useEffect(() => {
        switch(props.type.toLowerCase()){
            case 'info':  setIcon(infoIcon); break;
            case 'alert': setIcon(advertenceIcon); break;
            case 'check': setIcon(checkIcon); break;
        }
    }, [props.type])


    return (
        <div className={props.status === 'show' ? 'message-panel show-message' : 'message-panel hide-message'}>
            <div className="message-box">
                <div className="icon-content">
                    <span className={props.type}></span>
                    <img src={icon ? icon : ''} alt="icon" />
                </div>
                <div className="message-field">{props.message}</div>
            </div>
        </div>
    )
}

export default Message
