import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../../tools/app';


const PublicRoute = ({component: Component, restricted, ...rest}) => {

    const [logged, setLogged] = React.useState(null);

    React.useEffect( async() =>{
        
        setLogged(await isLogged())
        
    }, [setLogged]);

    return (
        logged != null && (
            <Route {...rest} render={props => (
                logged === true ?
                    <Redirect to="/" />
                : <Component {...props} />
            )} />
        )
    )
}

export default PublicRoute
