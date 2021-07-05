import React from 'react'
import { View } from 'react-native'

const Game = (props) => {

    return (
        <View>
            <View>{props.date}</View>
            <View>{props.homeTeamLogo}{props.homeTeamName}</View>
            <View>{props.awayTeamLogo}{props.awayTeamName}</View>
        </View>
    )
}

export default Game