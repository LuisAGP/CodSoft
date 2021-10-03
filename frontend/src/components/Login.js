import React from 'react'
import { fetchData } from '../tools/app';
import {withRouter} from 'react-router-dom'

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
        <form onSubmit={e => userLogin(e)}>
            <h1>Login</h1>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" />

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />

            <input type="submit" value="Login"/>
        </form>
    )
}

export default withRouter(Login)
