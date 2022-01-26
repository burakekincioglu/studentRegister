import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
//import { createStore } from 'redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginFrom';
import { Router } from 'react-native-router-flux';

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
    const store = createStore( reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <View>
      <Router />
      </View>
      
      </Provider>
    );
  }
}


export default App;
