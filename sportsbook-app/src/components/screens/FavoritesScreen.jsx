import React from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native'

import { SportSelector } from '../Exports'

const FavoritesScreen = (props) => {
    return (
        <View style={{backgroundColor: '#161616', flex: 1}}>
            <SportSelector />
        </View>
    )
}

export default FavoritesScreen