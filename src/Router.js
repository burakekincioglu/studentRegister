import React from "react";
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginFrom';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key='kimlik'>
                <Scene key="loginScreen" component={LoginForm} title="Login Screen" />
            </Scene>
        </Router>
    );
}

export default RouterComponent;