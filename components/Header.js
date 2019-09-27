import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export class Header extends React.Component {
    constructor(props){
        super(props);
    }
    

    render(){        
        return (
            <View style={{backgroundColor: '#dbdbdb'}}>
                <View style={styles.main}>
                    <Text style={{fontSize:30}}>Total Price:</Text>
                    <Text style={styles.text}>${this.props.price}</Text>
                </View>

                <View style={styles.names}>
                    <Text style={{fontSize:16, fontWeight: 'bold', width: '30%', textAlign: 'center'}}>Item Name</Text>
                    <Text style={{fontSize:16, fontWeight: 'bold', width: '20%', textAlign: 'center'}}>Quantity</Text>
                    <Text style={{fontSize:16, fontWeight: 'bold', width: '20%', textAlign: 'center'}}>Price </Text>
                    <Text style={{width: '15%'}}></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: 200,
        backgroundColor: '#dbdbdb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        
    },
    names: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        paddingLeft: 25,
        borderColor: '#b6b6b6',
        borderTopWidth: 2,
        },
});