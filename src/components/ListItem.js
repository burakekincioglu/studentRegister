import React, {Component} from "react";
import { Text, View } from "react-native";
import {CardSection} from './CardSection';

class ListItem extends Component {
    render(){
        const {name , surname} = this.props.student;
        return(
            <View>
                <CardSection>
                    <Text>
                        {name} {surname}
                    </Text>
                </CardSection>
            </View>
        );
    }
}

export default ListItem;