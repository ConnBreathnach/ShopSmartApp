import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AddItem } from './components/AddItem';

export class ShoppingList extends React.Component {
    constructor(props){
        this.state = {
            listOfItems: [],
            modalVisibility: false,
        };
    }

    addItem = (newItem) => {
        var arr = this.state.listOfItems;
        newItem.key = parseInt(arr.length);
        arr.unshift(newItem);
        this.setState({listOfItems: arr});
        this.totalCalculator();
      }
    
      delItem = (item) => {
        var arr = this.state.listOfItems;
        var itemToDelete = this.state.listOfItems.indexOf(item);
        arr.splice(itemToDelete, 1);
        this.setState({listOfItems: arr});
        this.totalCalculator();
      }
    
      showModal = () => {
        this.setState({modalVisibility: true});
      }


    render(){
        <AddItem
        action = {this.addItem}
        isVisible = {this.state.modalVisibility}
        hide = {() => {this.setState({modalVisibility: false})}}
        />
    }
}
