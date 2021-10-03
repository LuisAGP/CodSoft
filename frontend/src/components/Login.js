import React from 'react'
import { fetchData } from '../tools/app';
import {withRouter} from 'react-router-dom'
import '../../static/css/login.css';
import cloudImage from '../../static/images/cloud.jpg';
import userIcon from '../../static/images/user.svg'
import pwdIcon from '../../static/images/lock.svg'

const Login = (props) => {

    const userLogin = async(e) => {
        e.preventDefault();

        const response = await fetchData({
            url: 'authentication/',
            method: "POST",
            data: new FormData(e.target)
        });

        if (response.logged){
            props.history.push('/')
        }
        
    }


    return (
        <div className="login-content">
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


                    <input type="submit" value="Login" className="btn-submit"/>
                </div>

            </form>
        </div>
    )
}

export default withRouter(Login)
