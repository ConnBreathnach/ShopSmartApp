import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { Header } from './components/Header';
import { ListItem } from './components/ListItem';
import { CreateItem } from './components/CreateItem';
import { AddItemButton } from './components/AddItemButton';

export class PriceAdder extends React.Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = {
      listOfItems: [],
      modalVisibility: false,
      totalPrice: 0.00,
    }

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

  totalCalculator = () => {
    total = 0;
    this.state.listOfItems.map(item=>{
      total += (item.price * item.quantity);
    });
    this.setState({totalPrice: total.toFixed(2)});
  }

  render() {
    return (
      <View style={styles.container}>        
        <CreateItem
        action = {this.addItem}
        isVisible = {this.state.modalVisibility}
        hide = {() => {this.setState({modalVisibility: false})}}
        />
       
          <FlatList
            data={this.state.listOfItems}
            extraData={this.state}
            keyExtractor={(item) => item.key.toString()}
            ListHeaderComponent={
            <Header
            price={this.state.totalPrice}
            />
            }
            renderItem={({ item }) => 
              <ListItem
              item={item}
              itemName={item.itemName}
              quantity={item.quantity}
              price={item.price}
              delItem={this.delItem}
              />
            
            }
          />
          
       <AddItemButton
        show={this.showModal}
        />
   
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  
  addButton: {
    
    width: "30%",
    height: "10%",
  },
  modalStyle: {
    width: "85%",
    height: "90%",
    backgroundColor: "gray",
  },
  listStyle: {
    flex: 14,
  }
});
