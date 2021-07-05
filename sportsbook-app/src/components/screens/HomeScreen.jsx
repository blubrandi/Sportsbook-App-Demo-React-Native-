import  React, { Component } from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native'

// import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons'
import axios from 'axios'

import { Team, SportSelector } from '../Exports'

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // teamData: [],
            // teamNames: [],
            
            scheduleData: [],
            homeTeams: []

        }
    }

    // getTeamData = async () => {
    //     const headers = {
    //         'Ocp-Apim-Subscription-Key': 'df194af6ada54af983b9667771d8aa72'
    //     }
    
    //     await axios.get("https://fly.sportsdata.io/v3/mlb/scores/json/TeamSeasonStats/%7B2021%7D?key=df194af6ada54af983b9667771d8aa72")
    //         .then(res => {
    //             res.data
    
    //             const teamData = res.data
    //             this.setState({ teamData: teamData })
    //         })
    //         .catch(err => {
    //             console.log("There was an error", err)
    //         })
    // }

    getSchedules = async () => {
        await axios.get('https://fly.sportsdata.io/v3/mlb/scores/json/Games/2021?key=df194af6ada54af983b9667771d8aa72')
            .then(res => {
                res.data

                const scheduleData = res.data
                this.setState({ scheduleData: scheduleData })
                // this.setState({ homeTeams: scheduleData.HomeTeam })
                console.log(scheduleData)
                

            })
            .catch(err => {
                console.log("Error getting schedules: ", err)
            })
    }
    get getSchedules() {
        return this._getSchedules
    }
    set getSchedules(value) {
        this._getSchedules = value
    }

    componentDidMount() {
        // this.getSchedules()
    }

    render() {
        return (
            <>
                <SportSelector />
                {/* <View style={styles.gameList}>
                    {this.state.scheduleData.map(scheduleObj => {
                        return (
                        <Text>{scheduleObj.HomeTeam}</Text>
                        )
                    })}
                </View> */}
            </>
        )
    }
}


const styles = StyleSheet.create({
    gameList: {
        // flexGrow: 1,
        // backgroundColor: 'purple',
        // color: '#fff',
        // width: '100%'
    }
})
