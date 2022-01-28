import React from "react";
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginFrom';
import StudentCreate from "./components/StudentCreat";
import StudentList from "./components/StudentList";

const RouterComponent = () => {
    
    return(
        <Router sceneStyle={{marginTop: 65}}>
            <Scene key='kimlik'>
                <Scene key="loginScreen" component={LoginForm} title="Login Screen" />
                
            </Scene>

            <Scene key="main">
            <Scene 
                onRight={()=> Actions.StudentCreate()} // scene sağ üst butona tıklandığında çalışacak fonksiyon
                rightTitle="New" // sağ üzt butonun text'i
                key="studentList" 
                component={StudentList} title="Student List" 
            />
            </Scene>

            <Scene
                key="studentRegister"
                component={StudentCreate}
                title="Student Create"
            />

            


        </Router>
    );
}

export default RouterComponent;