import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import { connect } from 'react-redux';
import {studentListData} from '../actions/StudentActions';


class StudentList extends Component {

    componentWillMount() {
        this.props.studentListData();
        
    }

    render() {
        return(
            <View>
            <Text> Öğrenci Listesi </Text>
            <Text> Öğrenci Listesi </Text>
            <Text> Öğrenci Listesi </Text>
            </View>
        );
    }
}

const mapStateToProps = ({studentDataResponse}) => {

};

export default connect(mapStateToProps, {studentListData})(StudentList);