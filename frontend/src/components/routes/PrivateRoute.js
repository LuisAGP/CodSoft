import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../../tools/app';

const PrivateRoute = ({component: Component, ...rest}) => {
    
    return (
        <Route {...rest} render={props => (
            isLogged() == true ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    )
}

export default PrivateRoute
