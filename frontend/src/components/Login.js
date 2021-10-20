import React from 'react'
import { fetchData, setLoader, removeLoader } from '../tools/app';
import {withRouter} from 'react-router-dom'
import '../../static/css/login.css';
import cloudImage from '../../static/images/cloud.jpg';
import userIcon from '../../static/images/user.svg'
import pwdIcon from '../../static/images/lock.svg'
import Message from './utils/Message';
import { generalContext } from './context/GeneralProvideer';

const Login = (props) => {

    const {alert, setAlert} = React.useContext(generalContext);

    const userLogin = async(e) => {
        e.preventDefault();

        const response = await fetchData({
            url: 'authentication/',
            method: "POST",
            data: new FormData(e.target)
        });

        response && removeLoader("Login");

        if (response.logged){
            setAlert({
                type: 'check',
                status: 'show',
                message: response.message
            });
            props.history.push('/');
        }else{
            setAlert({
                type: 'alert',
                status: 'show',
                message: response.message
            });
        }
        
    }


    return (
        <div className="login-content">
            <Message type={alert.type} message={alert.message} status={alert.status} />
            <form onSubmit={e => userLogin(e)} className="form">

                <div className="login-top">
                    <img src={cloudImage} alt="Cloud" />
                    <h1>OpiCloud</h1>
                </div>

                <div className="content">
                    <div className="form-field blue">
                        <label htmlFor="username"><img src={userIcon} alt="" /></label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>
                    
                    <div className="form-field blue">
                        <label htmlFor="password"><img src={pwdIcon} alt="" /></label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn-submit" onClick={e => setLoader(e.target)}>
                        Login
                    </button> 
                </div>

            </form>
        </div>
    )
}

export default withRouter(Login)
