import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { createStore } from 'redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginFrom';


class App extends Component {

    UNSAFE_componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyCKsa1qHZYkh3LNfRc4J_Cm8lgUB7zTMdk',
        authDomain: 'studentregister-cff88.firebaseapp.com',
        projectId: 'studentregister-cff88',
        storageBucket: 'studentregister-cff88.appspot.com',
        messagingSenderId: '134025371139',
        appId: '1:134025371139:web:613050f5b0e448cc7ab836',
        measurementId: 'G-RQ0Q34DCD0',
      }); 
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View>
      <LoginForm />
      </View>
      
      </Provider>
    );
  }
}


export default App;
