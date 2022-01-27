import React, {Component} from 'react';
import {Alert,TextInput, View} from 'react-native';
import firebase from 'firebase/compat';
//import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
//import ReduxThunk from 'redux-thunk';
import  {emailChanged, passwordChanged, loginUser} from '../actions';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Spinner from './Spinner';
import reducers from '../reducers';

class LoginForm extends Component {
    //state = {email: '', password: '', loading: false};
    clickLogin(){
        const {email, password} = this.props;      
        this.props.loginUser({email, password});
    }

    renderButton()
    {
        if(!this.props.loading){
           console.log('props.loading: ' + this.props.loading);
           return <Button onPress={this.clickLogin.bind(this)}> Login </Button>;
        }
        return <Spinner size="small" />;
    }
    render(){
        console.log('response email: ' + this.props.email);
        console.log('response passw: ' + this.props.password);
        const {inputStyle} = styles;
        return(
            <View style={{flex:1,backgroundColor: 'white'}}>
            <Card>
                <CardSection>
                    <TextInput 
                    placeholder='Email'
                    style={inputStyle}
                    value={this.props.email}
                    onChangeText={email => this.props.emailChanged(email)} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                    <TextInput
                    secureTextEntry 
                    placeholder='Password'
                    style={inputStyle}
                    value={this.props.password}
                    onChangeText={password => this.props.passwordChanged(password)} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
            </View> 
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
    const { email, password, loading } = authResponse;
    return { // return dediğim anda artık bu değerler props'a dahil oluyor
        email,
        password,
        loading
    };
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);

