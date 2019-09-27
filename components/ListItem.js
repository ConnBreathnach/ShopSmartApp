import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';

export class ListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.itemNameTextStyle}>{this.props.itemName}</Text>
                <Text style={styles.quantityTextStyle}>{this.props.quantity}</Text>
                <Text style={styles.priceTextStyle}>{this.props.price}</Text>
                <Button
                large 
                rightIcon = {{name: 'delete'}} 
                onPress={() => {
                    this.props.delItem(this.props.item);
                }} 
                transparent={true} 
                style={styles.buttonStyle} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        paddingLeft: 25,
        backgroundColor: '#cccccc',
        height: 80,
        borderColor: '#b6b6b6',
        borderTopWidth: 2,
    },
    itemNameTextStyle: {
        fontSize: 16,
        width: '40%',
        paddingLeft: -5,
    },
    quantityTextStyle: {
        fontSize: 16,
        width: '15%',
        textAlign: 'right',
    },
    priceTextStyle: {
        paddingLeft: 5,
        fontSize: 16,
        width: '20%',
        textAlign: 'right',
    },
    buttonStyle: {
        width: '10%',
    },
});