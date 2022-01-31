import React, {Component} from 'react';
import {TextInput, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import {Button} from './Button';
import { Card } from './Card';
import { CardSection } from './CardSection';
import {Spinner} from './Spinner';
import { studentChanged, studentCreate } from '../actions/StudentListActions';

class StudentCreate extends Component {

    clickRegister() {
        const { name, surname, no, sube } = this.props;

        this.props.studentCreate({name, surname, no, sube});
    }

    renderButton()
    {
        if(!this.props.loading){
           console.log('props.loading: ' + this.props.loading);
           return <Button onPress={this.clickRegister.bind(this)}> Register </Button>;
        }
        return <Spinner size="small" />;
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
                    onChangeText={name => this.props.studentChanged({props: 'name', value: name})} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                <TextInput 
                    placeholder='SurName'
                    style={inputStyle}
                    value={this.props.surname}
                    onChangeText={surname => this.props.studentChanged({props: 'surname', value: surname})} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                <TextInput 
                    placeholder='No'
                    style={inputStyle}
                    value={this.props.no}
                    onChangeText={no => this.props.studentChanged({props: 'no', value: no})} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                    <Text>Şube</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.sube}
                        onValueChange={sube => this.props.studentChanged({props: 'sube', value: sube})}
                    >
                        <Picker.Item label="A şubesi" value="asube" />
                        <Picker.Item label="B şubesi" value="bsube" />
                        <Picker.Item label="C şubesi" value="csube" />
                    </Picker>

                </CardSection>

                <CardSection>
                    {this.renderButton()};
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

const mapToStateProps = ({studentListResponse}) => {
    const { name, surname, no, sube, loading } = studentListResponse;
    return { name, surname, no, sube, loading };
};

export default connect(mapToStateProps, {studentChanged, studentCreate})(StudentCreate);