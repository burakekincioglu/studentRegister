import React, {Component} from "react";
import { Text, View, TouchableWithoutFeedback, TouchableWithoutFeedbackBase } from "react-native";
import {Actions} from 'react-native-router-flux';
import {CardSection} from './CardSection';

class ListItem extends Component {

    ogrenciClick() {
        Actions.studentUpdate({ student: this.props.student});
    }

    render(){
        const {name , surname} = this.props.student;
        return(
            <TouchableWithoutFeedback onPress={this.ogrenciClick.bind(this)}>
            <View>
                <CardSection>
                    <Text>
                        {name} {surname}
                    </Text>
                </CardSection>
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default ListItem;