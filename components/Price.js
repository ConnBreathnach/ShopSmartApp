import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export class PriceView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            euro: 0,
            cents: 0,
        }
    }

    addPrices = () => {
        euro = parseFloat(this.state.euro);
        cents = parseFloat(this.state.cents);
        newPrice = (euro + cents);
        this.props.sendPrice(newPrice);
    }

    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.text}>Price:</Text>
                <View style={styles.view}>
                    <TextInput 
                        style={styles.euroInput}
                        keyboardType='numeric'
                        maxLength={4}
                        onChangeText={(euro) => {
                            this.setState({euro: euro});
                            setTimeout(this.addPrices, 0.2);                    
                        }}
                    />
                    <Text style={styles.dotText}>.</Text>
                    <TextInput 
                        style={styles.centsInput}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={(cents) => {
                            this.setState({cents: (cents / 100)});
                            setTimeout(this.addPrices, 0.2);
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        paddingRight: 40,
    },
    dotText: {
        fontSize: 32,
        alignSelf: 'flex-end',
    },
    euroInput: {
        height: 60,
        width: 70,
        fontSize: 32,
        textAlign: 'center',
    },
    centsInput: {
        height: 60,
        width: 45,
        fontSize: 32,
        textAlign: 'center',
    },
});