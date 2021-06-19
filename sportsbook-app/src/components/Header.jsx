import React from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native'


const Header = (props) => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.whiteText}>Header</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    viewStyle: {
    backgroundColor: '#161616',
    paddingTop: 40,
    height: 120
    }, 
    whiteText: {
        color: '#fff'
    }
})