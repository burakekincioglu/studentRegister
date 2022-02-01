import React, {Component} from 'react';
import {TextInput, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import {Button} from './Button';
import { Card } from './Card';
import { CardSection } from './CardSection';
import {Spinner} from './Spinner';
import { studentChanged, studentUpdate } from '../actions/StudentActions';

class StudentUpdate extends Component {
    state = {name: '', surname: '', no: '', sube: ''};

    componentWillMount() {
        const { name, 
                surname, 
                no, 
                sube } = this.props.student;

            this.setState({
                name, 
                surname, 
                no, 
                sube
                });

    }

    clickUpdate() {
        const { name, 
                surname, 
                no, 
                sube } = this.state;

        this.props.studentUpdate({name, surname, no, sube, uid: this.props.student.uid});
    }

    clickDelete() {

    }

    renderButton()
    {
        if(!this.props.loadingUpdate){
           console.log('props.loading: ' + this.props.loadingUpdate);
           return <Button onPress={this.clickUpdate.bind(this)}> Update </Button>;
        }
        return <Spinner size="small" />;
    }

    renderDeleteButton()
    {
        if(!this.props.loadingDelete){
           console.log('props.loading: ' + this.props.loadingDelete);
           return <Button onPress={this.clickDelete.bind(this)}> Delete </Button>;
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
                    value={this.state.name}
                    onChangeText={name => this.setState({name})} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                <TextInput 
                    placeholder='SurName'
                    style={inputStyle}
                    value={this.state.surname}
                    onChangeText={surname => this.setState({surname})} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                <TextInput 
                    placeholder='No'
                    style={inputStyle}
                    value={this.state.no}
                    onChangeText={no => this.props.setState({no})} // ikinci kullanımı {text => this.setState({email: text})}
                    /> 
                </CardSection>

                <CardSection>
                    <Text>Şube</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.state.sube}
                        onValueChange={sube => this.props.setState({sube})}
                    >
                        <Picker.Item label="A şubesi" value="asube" />
                        <Picker.Item label="B şubesi" value="bsube" />
                        <Picker.Item label="C şubesi" value="csube" />
                    </Picker>

                </CardSection>

                <CardSection>
                    {this.renderButton()};
                </CardSection>

                <CardSection>
                    {this.renderDeleteButton()};
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

const mapToStateProps = ({studentUpdateResponse}) => {
    const { loadingUpdate } = studentUpdateResponse;
    return { loadingUpdate };
};

export default connect(mapToStateProps, {studentChanged, studentUpdate})(StudentUpdate);