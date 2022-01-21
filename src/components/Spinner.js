import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => { // default large oldu, size gelmezse large olacak.
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={ size || 'large'} />  
        </View>
    );
}

const styles={
    spinnerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Spinner;

