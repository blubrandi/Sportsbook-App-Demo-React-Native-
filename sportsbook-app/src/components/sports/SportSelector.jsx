import React from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator, ScrollView, FlatList } from 'react-native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { event } from 'react-native-reanimated'



const SportSelector = props => {

    const handleIconTap = (value) => {alert(value)}

    let isActive = ''
    let sportSelectorIcons = [
        <Ionicons style={styles.icon} name="baseball-outline" size={48} color="#fff" />,
        <FontAwesome5 style={styles.icon} name="football-ball" size={38} color="#fff" />,
        <Ionicons style={styles.icon} name="football-outline" size={48} color="#fff" />,
        <FontAwesome5 style={styles.icon} name="basketball-ball" size={38} color="#fff" />,
        <FontAwesome5 style={styles.icon} name="golf-ball" size={38} color="#fff" />,
        <Ionicons style={styles.icon} name="tennisball-outline" size={48} color="#fff" />,
        <FontAwesome5 style={styles.icon} name="horse-head" size={38} color="#fff" />,
    ]

    const baseBallLeagues = [
        "MLB",
        "MiLB",
        "National League",
        "American League"
    ]

    return (
        <>
        <ScrollView contentContainerStyle={styles.sportSelectContainer} horizontal={true}>
             { sportSelectorIcons }

        </ScrollView>

        </>
    )
}

export default SportSelector

const styles = StyleSheet.create({
    sportSelectContainer: {
        flexGrow: 1,
        backgroundColor: '#161616',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 40,
        paddingHorizontal: 50,
    },
    icon: {
        padding: 12,
    },
    leagueNames: {
        color: '#fff',
        backgroundColor: 'red'
    }

})

