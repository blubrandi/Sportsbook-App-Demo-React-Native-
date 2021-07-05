import React, { Component } from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native'
import axios from 'axios'
// import { SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Header from './components/Header'
import Tabs from './navigation/Tabs'

export default class Main extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
            <Header />
                <NavigationContainer>
                    <Tabs />
                </NavigationContainer>
            </>
        )
    }
}

const styles = StyleSheet.create({

    redText: {
        color: '#ed1532'
    },
    darkGreyBackground: {
        backgroundColor: '#161616',
    }

});