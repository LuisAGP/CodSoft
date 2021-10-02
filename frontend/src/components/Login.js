import React from 'react'
import { fetchData } from '../tools/app';

const Login = () => {

    const userLogin = async(e) => {
        e.preventDefault();

        const response = await fetchData({
            url: 'authentication/',
            method: "POST",
            data: new FormData(e.target)
        });
        
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

export default Login
