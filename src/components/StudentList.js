import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import { connect } from 'react-redux';
import {studentListData} from '../actions/StudentActions';


class StudentList extends Component {

    componentWillMount() {
        this.props.studentListData();

    }

    componentWillReceiveProps(nextProps) { // nextProps burada this.state içeriğini dönüyor
        const ds = new FlatList.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
    this.dataSource = ds.cloneWithRows(nextProps.studentsArray);
    }

    renderRow(student) {
        return <ListItem student={student} />;
    }

    render() {
        console.log(this.props.studentsArray);
        return(
            <View>
            <FlatList 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />

            
            </View>
        );
    }
}

const mapStateToProps = ({studentDataResponse}) => {
    const studentsArray = _.map(studentDataResponse, (val, uid) => {  // studentDataResponse.data -> payload.data anlamında aslında
        return {...val, uid}; // {name: 'Ayşe', surname: ''..., uid: ''} şeklinde bir data array dönüyor
    });
    return {studentsArray};
};

export default connect(mapStateToProps, {studentListData})(StudentList);