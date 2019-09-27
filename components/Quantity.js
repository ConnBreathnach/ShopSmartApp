import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export class QuantityView extends React.Component {
    constructor(props){
        super(props);
        
    }
    getValue = () => {
            return this.props.quantity.toString();
    }
    render(){
        return(
            <View style={styles.main}>
                <Text style={styles.text}>Quantity:</Text>
                <View style={styles.view}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.decrease}
                    disabled={this.props.disableButton()}
                    >
                        <Icon 
                        name='remove'
                        color='white'
                        />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        onChangeText={this.props.change}
                        defaultValue={this.props.quantity ? this.getValue() : '1'}
                        maxLength={3}
                    />
                    <TouchableOpacity
                    style={styles.button}
                    onPress={this.props.increase}
                    >
                        <Icon 
                        name='add'
                        color='white'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        paddingBottom: 16,
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    input: {
        height: 50,
        width: 80,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        fontSize: 20,
        
    },
});