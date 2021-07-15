import React, { useState } from 'react'
import { useSelector } from 'react-redux'


import { Button, Image, StyleSheet, ScrollView, TouchableOpacity, Text, TextInput, View } from 'react-native'

const PendingBetslip = (props) => {
    const pendingBets = useSelector(state => state.bets)

    const [wager, setWager] = useState(0)

    calculateBet = (props) => {
        let y = wager
        let a = (y * Math.abs(props/100)) + y

        console.log("Bet: ", y, "Profit: ", Math.round(a - y), "Payout: ", a)
        console.log("Bet was calculated!: ", a)
        setWager(0)
        console.log(wager)
    }
 
    const renderedPendingBets = pendingBets.map(bet => (
        <>
        <Text style={{color: '#fff'}}>{bet.betID}</Text>
        <Text style={{color: '#fff'}}>{bet.awayTeamName} vs {bet.homeTeamName}</Text>
        <Text style={{color: '#fff'}}>{bet.awayMoneyLine}</Text>
        <Text style={{color: '#fff'}}>{wager}</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={setWager}></TextInput>
        <TouchableOpacity onPress={() => calculateBet(bet.awayMoneyLine)}><Text>Add Bet</Text></TouchableOpacity>
        <Text style={{color: '#fff'}}>__________________</Text>
        </>
    ))

    return (

        <View>
            {renderedPendingBets}
        </View>

    )
}

export default PendingBetslip

const styles=StyleSheet.create({
    input: {
        height: 40,
        width: 80,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'hotpink',
        backgroundColor: '#333',
        color: '#fff'
      }
})