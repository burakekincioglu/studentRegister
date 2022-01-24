import React, {Component} from 'react';
import {Alert,TextInput} from 'react-native';
import firebase from 'firebase/compat';
//import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
//import ReduxThunk from 'redux-thunk';
import  {emailCheanged, passwordChanged} from '../actions';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Spinner from './Spinner';
import reducers from '../reducers';

class LoginForm extends Component {
    state = {email: '', password: '', loading: false};
    clickLogin(){
        this.setState({loading: true});
        console.log(this.state.loading);
        const {email, password} = this.state;
        if(email === '' || password === '')
        {
            Alert.alert('Message', 'Email and Password should not be empty.', 
            [ {text: 'Okay', onPress: ()=> null} ]);
            this.setState({loading: false});
        }
        else
        {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.loginSuccess.bind(this))
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.loginSuccess.bind(this))
                .catch(this.loginFail.bind(this));
            });
        }
        
    }
    loginSuccess() {
        console.log('login başarılı');
        this.setState({loading: false});
    }
    loginFail()
    {
        Alert.alert('Message', 'Email or Password is wrong.', 
            [ {text: 'Okay', onPress: ()=> null} ]);
        this.setState({loading: false});
    }

    renderButton()
    {
        if(!this.state.loading){
           return <Button onPress={this.clickLogin.bind(this)}> Login </Button>;
        }
        return <Spinner size="small" />;
    }
    render(){
        const {inputStyle} = styles;
        return(
            <Card>
                <CardSection>
                    <TextInput 
                    placeholder='Email'
                    style={inputStyle}
                    value={this.state.email}
                    onChangeText={email => this.props.emailCheanged(email)} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                    <TextInput
                    secureTextEntry 
                    placeholder='Password'
                    style={inputStyle}
                    value={this.state.password}
                    onChangeText={password => this.props.passwordChanged(password)} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card> 
        );
    }
    
}
const styles = {
    
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
      }
};

const mapStateToProps = ( {authResponse} ) => {
    const { email, password } = authResponse;
    return { // return dediğim anda artık bu değerler props'a dahil oluyor
        email,
        password
    };
}

export default connect(mapStateToProps, {emailCheanged, passwordChanged})(LoginForm);

