import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export class AddItemButton extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.props.show}
            >
            <Icon
            name='add'
            color='white'
            />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '10%',
        right: '15%',

    },
});