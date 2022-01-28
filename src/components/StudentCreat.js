import React, {Component} from 'react';
import {TextInput, Picker, Text } from 'react-native';
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
                    onChangeText={name => this.props.studentChanged(name)} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                <TextInput 
                    placeholder='SurName'
                    style={inputStyle}
                    value={this.props.surname}
                    onChangeText={surname => this.props.studentChanged(surname)} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                <TextInput 
                    placeholder='No'
                    style={inputStyle}
                    value={this.props.no}
                    onChangeText={no => this.props.studentChanged(no)} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                    <Text>Şube</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.sube}
                        onValueChange={sube => this.props.studentChanged(sube)}
                    >
                        <Picker.Item label="A şubesi" value="asube" />
                        <Picker.Item label="B şubesi" value="bsube" />
                        <Picker.Item label="C şubesi" value="csube" />
                    </Picker>

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