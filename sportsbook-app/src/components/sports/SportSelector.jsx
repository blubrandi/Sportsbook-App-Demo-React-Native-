import React from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator, ScrollView, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

const SportSelector = props => {

    let sportSelectorIcons = [
        <Ionicons style={styles.icon} name="baseball-outline" key={"baseball"} size={48} color="#fff" />,
        <FontAwesome5 style={styles.icon} name="football-ball" key={"football"} size={38} color="#fff" />,
        <Ionicons style={styles.icon} name="football-outline" key={"soccer"} size={48} color="#fff" />,
        <FontAwesome5 style={styles.icon} name="basketball-ball" key={"basketball"} size={38} color="#fff" />,
        <FontAwesome5 style={styles.icon} name="golf-ball" key={"golf"} size={38} color="#fff" />,
        <Ionicons style={styles.icon} name="tennisball-outline" key={"tennis"} size={48} color="#fff" />,
        <FontAwesome5 style={styles.icon} name="horse-head" key={"horse"} size={38} color="#fff" />,
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
            <Ionicons style={styles.icon} name="baseball-outline" key={"baseball"} size={48} color="#fff" />
            <FontAwesome5 style={styles.icon} name="football-ball" key={"football"} size={38} color="#fff" />
            <Ionicons style={styles.icon} name="football-outline" key={"soccer"} size={48} color="#fff" />
            <FontAwesome5 style={styles.icon} name="basketball-ball" key={"basketball"} size={38} color="#fff" />
            <FontAwesome5 style={styles.icon} name="golf-ball" key={"golf"} size={38} color="#fff" />
            <Ionicons style={styles.icon} name="tennisball-outline" key={"tennis"} size={48} color="#fff" />
            <FontAwesome5 style={styles.icon} name="horse-head" key={"horse"} size={38} color="#fff" />
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

