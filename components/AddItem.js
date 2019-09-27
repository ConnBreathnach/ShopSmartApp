import React from 'react';
import { Modal, View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import { QuantityView } from './Quantity';

export class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: {
                itemName: "Item",
                quantity: 1,
            }
        };
        
    }

    sendData = () => {
        itemData = this.state.item;
        this.props.action(itemData);
        this.setState({
            item: {
                itemName: "Item",
                quantity: 1,
        }});

    }

    increaseQuantity = () => {
        this.setState({item: {...this.state.item, quantity: this.state.item.quantity+1}});
    }

    decreaseQuantity = () => {
        this.setState({item: {...this.state.item, quantity: this.state.item.quantity-1}});
    }

    changeQuantity = (quantity)=>{
        if (quantity == null) {
            quanitiy = 1;
        }
        this.setState({item: {...this.state.item, quantity: parseInt(quantity)}})
}
    
    disableDecreaseButton = () => {
        if(this.state.item.quantity==1){
            return true;
        } else {
            return false;
        }
    }

    checkQuantity = () => {
        if(this.state.quantity <= 0) {
            this.setState({item: {...this.state.item, quantity: 1}});
        }
    }


    render(){
        return (
            <Modal
            animationType = 'slide'
            visible = {this.props.isVisible}
            onRequestClose = {this.props.hide}
            >
            <View style={styles.mainView}>
            <Text style={{
                alignSelf:'center',
                fontSize: 32,
            }}>Item Name:</Text>
                <TextInput
                    style={styles.inputs}
                    maxLength={20}
                    onChangeText={
                        (itemName)=>this.setState({item: {...this.state.item, itemName: itemName}})
                }    
                />
                <QuantityView
                increase={this.increaseQuantity}
                decrease={this.decreaseQuantity}
                quantity={this.state.item.quantity}
                change={this.changeQuantity}
                disableButton={this.disableDecreaseButton}
                check={this.checkQuantity}
                />
            </View>
            <View style={styles.buttonView}>
            <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={this.props.hide}
            >
                <Text style={styles.textButtonStyle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
                this.sendData();
                this.props.hide();
            }}
            >
                <Text style={styles.textButtonStyle}>Add Item</Text>
            </TouchableOpacity>
            </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 9,
        justifyContent: 'space-evenly',
    },
    buttonStyle: {
        height: 50,
        width: "45%",
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        borderRadius: 30,
    },
    textButtonStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonView: {
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'space-around',
    },
    inputs: {
        width: "90%",
        height: 40,
        fontSize: 26,
        textAlign: 'center',
    },
});