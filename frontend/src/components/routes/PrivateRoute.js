import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../../tools/app';

const PrivateRoute = ({component: Component, ...rest}) => {

    const [logged, setLogged] = React.useState(null);

    React.useEffect( async() =>{

        setLogged(await isLogged())
        
    }, [setLogged]);
    
    return (
        logged != null && (
            <Route {...rest} render={props => (
                logged === true ?
                    <Component {...props} />
                : <Redirect to="/login" />
            )} />
        )
    )
}

export default PrivateRoute
