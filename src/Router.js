import React from "react";
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginFrom';
import StudentList from "./components/StudentList";

const RouterComponent = () => {
    
    return(
        <Router sceneStyle={{marginTop: 65}}>
            <Scene key='kimlik'>
                <Scene key="loginScreen" component={LoginForm} title="Login Screen" />
                
            </Scene>

            <Scene key="main">
            <Scene key="studentList" component={StudentList} title="Student List" />
            </Scene>
        </Router>
    );
}

export default RouterComponent;