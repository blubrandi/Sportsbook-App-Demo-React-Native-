import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { Button, Image, StyleSheet, ScrollView, TouchableOpacity, Text, TextInput, View } from 'react-native'

const PendingBetslip = (props) => {
    const pendingBets = useSelector(state => state.bets)
    const dispatch = useDispatch()

    const [wager, setWager] = useState(0)
    // const [currentCalculatedBet, setCurrentCalculatedBet] = useState({})
    // const [thisCalculatedBet, setThisCalculatedBet] = useState(0)

    let currentCalculatedBet = {
        id: '',
        thisCalculatedBet: 0
    }

    calculateBet = (props) => {
        console.log("Props from calculatbet: ", props)

        let a
        let y = wager
        console.log(y)

        if (props < 100) {
            a = (y * Math.abs(100/props)) + parseInt(y)
        } else {
            a = (y * Math.abs(props/100)) + parseInt(y)
        }
        
        console.log("a ", a)
        console.log("props from calculate bet", props)
        console.log("Bet: ", y, "Profit: ", parseInt(a) - parseInt(y), "Payout: ", a)
        console.log("Bet was calculated!: ", a)
        console.log("wager: ", wager)

        delete pendingBets.find(thisBet => thisBet.gameID)

    }

    handleTapPlaceBet = () => {
        let focusedBet = pendingBets.find(thisBet => thisID)


        currentCalculatedBet.id = ''
        currentCalculatedBet.thisCalculatedBet = 0

        console.log(currentCalculatedBet)
    }

    calculateThisBet = (props, num) => {
        // setCurrentCalculatedBet({...currentCalculatedBet, id: '', calculateBet: 0})
        // setThisCalculatedBet(0)
        console.log("this calculated from function start: ", thisCalculatedBet)
        console.log(props, num)

        let thisCalculatedBet = 0

        let thisID = props
        console.log("thisID", thisID)

        let focusedBet = pendingBets.find(thisBet => thisID)
        console.log("focusedBet", focusedBet)

        let theseOdds = focusedBet.awayMoneyLine
        console.log("theseOdds: ", theseOdds)
        
        let focusedBetWager = focusedBet.wager
        console.log("Focused Bet Wager: ", focusedBetWager + num)

        let y = num
        console.log("y: ", y)

        if (theseOdds > 100) {
            thisCalculatedBet = (y * Math.abs(theseOdds/100)) + parseInt(y)
        } else {
            thisCalculatedBet = (y * Math.abs(100/theseOdds)) + parseInt(y)
        }
        

        console.log("Bet: ", y, "Profit: ", Math.round(parseInt(thisCalculatedBet) - parseInt(y)), "Payout: ", thisCalculatedBet)

        console.log("This Bet Calculated: ", thisCalculatedBet)

        // setCurrentCalculatedBet({...currentCalculatedBet, id: thisID, calculatedBet: thisCalculatedBet})
        // console.log("Current Calculated Bet: ", currentCalculatedBet)

        handleTapPlaceBet()
    }
 
    const renderedPendingBets = pendingBets.map(bet => (
        <View style={styles.betContainer} key={bet.betID}>
            {/* <Text style={{color: '#fff'}}>{bet.betID}</Text> */}
            <View style={styles.betHeader}>
            <Text style={{color: '#fff', fontSize: 18}}>{bet.awayTeamName} vs {bet.homeTeamName}</Text>
            <Text style={{color: '#fff', fontSize: 18}}>{bet.awayMoneyLine}</Text>
            </View>
            <Text style={{color: '#fff'}}>{wager}</Text>
            <TextInput style={styles.input} keyboardType="numeric" onChangeText={setWager}></TextInput>
            <View style={styles.quickBets}>
                <TouchableOpacity style={styles.quickBet}><Text>CLR</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickBet} onPress={() => {calculateThisBet(bet.betID, 5)}}><Text>$5</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickBet} onPress={() => {calculateThisBet(bet.betID, 10)}}><Text>$10</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickBet} onPress={() => {calculateThisBet(bet.betID, 20)}}><Text>$20</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickBet} onPress={() => {calculateThisBet(bet.betID, 100)}}><Text>$50</Text></TouchableOpacity>
            </View>
            {currentCalculatedBet.id == bet.betID &&
            <Text style={{color: '#fff'}}>
            {currentCalculatedBet.calculatedBet}
            </Text>
            }   
            <TouchableOpacity style={styles.placeBet} onPress={() => calculateBet(bet.awayMoneyLine)}><Text>Place Bet</Text></TouchableOpacity>
            
        </View>
    ))

    return (

        <View>
            {renderedPendingBets}
        </View>

    )
}

export default PendingBetslip

const styles=StyleSheet.create({
    betContainer: {
        backgroundColor: '#222',
        marginBottom: 20,
        alignContent: 'space-between',
        padding: 18,
        borderRadius: 12
    },
    betHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    input: {
        height: 40,
        width: 120,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'hotpink',
        backgroundColor: '#333',
        color: '#fff'
      },
      quickBets: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 18
      },
      quickBet: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#37bcc2',
        color: '#fff',
        width: 50,
        height: 50,
        borderRadius: 4,
        textAlign: 'center'
      },
      placeBet: {
          backgroundColor: 'hotpink',
          justifyContent: 'space-around',
          paddingVertical: 8
      }
})