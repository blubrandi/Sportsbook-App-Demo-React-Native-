import React from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator, ScrollView, FlatList } from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'



const SportSelector = props => {

    let isActive = ''
    let sportSelectorIcons = [
        <Ionicons name="baseball-outline" size={58} color="#fff" />,
        <FontAwesome5 name="football-ball" size={48} color="#fff" />,
        <Ionicons name="football-outline" size={58} color="#fff" />,
        <FontAwesome5 name="basketball-ball" size={48} color="#fff" />,
        <FontAwesome5 name="golf-ball" size={48} color="#fff" />,
        <Ionicons name="tennisball-outline" size={58} color="#fff" />,
        <FontAwesome5 name="horse-head" size={48} color="#fff" />,
    ]

    return (
        <>
        <ScrollView style={styles.sportSelectContainer} horizontal={true}>
             { sportSelectorIcons }
        </ScrollView>

        {/* <Baseball /> */}
        </>
    )
}

export default SportSelector

const styles = StyleSheet.create({
    sportSelectContainer: {
        backgroundColor: '#161616',
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        paddingVertical: 40,

    }
})

