import  React, { Component } from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native'

import axios from 'axios'

import { Team, SportSelector } from '../Exports'

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            teamData: [],
            teamNames: []
        }
    }

    getTeamData = async () => {
        const headers = {
            'Ocp-Apim-Subscription-Key': 'df194af6ada54af983b9667771d8aa72'
        }
    
        await axios.get("https://fly.sportsdata.io/v3/mlb/scores/json/TeamSeasonStats/%7B2021%7D?key=df194af6ada54af983b9667771d8aa72")
            .then(res => {
                res.data
    
                const teamData = res.data
                this.setState({ teamData: teamData })
            })
            .catch(err => {
                console.log("There was an error", err)
            })
    }

    componentDidMount() {
        this.getTeamData()
    }

    render() {
        return (
            <>
                <SportSelector />
                <View>
                    {this.state.teamData.map((teamObj) => { 
                        return (<Team team={teamObj} key={teamObj.team} />)
                    })}
                </View>
            </>
        )
    }
}




