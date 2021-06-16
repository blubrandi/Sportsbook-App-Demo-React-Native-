import React, { Component } from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native'
import axios from 'axios'


import Team from './components/Team'
import SportSelector from './components/SportSelector'

export default class Main extends Component {

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
            <View>
                {this.state.teamData.map((teamObj) => { return (<Team team={teamObj} key={teamObj.team} />)})}
            </View>
            <View>
                <SportSelector />
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({

    redText: {
        color: '#ed1532'
    },
    // viewContainer: {
    //     flex: 1,
    //     backgroundColor: '#333',
    //     color: '#ffffff',
    //     height: "20%",
    //     // alignContent: center
    // }
});