import {Outlet,Navigate} from 'react-router-dom'
import { config } from './config';

function PrivateRoute() {
    const login = LocationManager.login
    return (login?<Outlet />:<Navigate to={config.login} />);
}

export default PrivateRoute;