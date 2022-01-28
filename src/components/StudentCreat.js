import React, {Component} from 'react';
import { View, Text, TextInput } from 'react-native';
import {Button, Card, CardSection} from '../components';

class StudentCreate extends Component {

    clickRegister() {
        
    }

    render() {
        const {inputStyle} = styles;
        return(
            <Card>
                <CardSection>
                <TextInput 
                    placeholder='Name'
                    style={inputStyle}
                    value={this.props.name}
                    onChangeText={name => this.props.studentNameChanged(name)} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                <TextInput 
                    placeholder='SurName'
                    style={inputStyle}
                    value={this.props.surname}
                    onChangeText={surname => this.props.studentNameChanged(surname)} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                <TextInput 
                    placeholder='No'
                    style={inputStyle}
                    value={this.props.no}
                    onChangeText={no => this.props.studentNameChanged(no)} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                    <Button onPress={this.clickRegister.bind(this)}> Register </Button>;
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


export default StudentCreate;