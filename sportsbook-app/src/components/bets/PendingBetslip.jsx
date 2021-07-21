import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { Button, Image, StyleSheet, ScrollView, TouchableOpacity, Text, TextInput, View } from 'react-native'
import { pendingBetRemoved, betStatusChanged } from './betsSlice'

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
        let betID = props.betID

        let a
        let y = props.wager
        console.log(y)

        if (props.awayMoneyLine < 100) {
            a = (y * Math.abs(100/props.awayMoneyLine)) + parseInt(y)
        } else {
            a = (y * Math.abs(props.awayMoneyLine/100)) + parseInt(y)
        }

        handleTapPlaceBet(betID)

    }

    handleTapPlaceBet = (props) => {
        console.log("HANDLE PROPS: ", props)
        let focusedBet = pendingBets.find(element => element.betID == props)
        
        // dispatch(pendingBetRemoved(focusedBet))
        dispatch(betStatusChanged(focusedBet))
        console.log("FOCUSED BET: ", focusedBet)
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

        let theseOdds = focusedBet.betOdds
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

    const filterThesePlacedBets = pendingBets.filter(pendingBet => {
        return pendingBet.betPending
    })
 
    const renderedPendingBets = filterThesePlacedBets.map(bet => (

        <View style={styles.betContainer} key={bet.betID}>
            {/* <Text style={{color: '#fff'}}>{bet.betID}</Text> */}
            <View style={styles.betHeader}>
                <View style={styles.betHeaderBetInfo}>
                    <Text style={{color: '#d49e0e', fontSize: 20, fontWeight: '700'}}>{bet.teamName}</Text>
                    <Text style={{color: '#fff', fontSize: 20}}>{bet.betOdds}</Text>
                </View>
                <Text style={{color: '#dfdfdf', fontSize: 14}}>{bet.gameTeams}</Text>
            <Text style={{color: '#fff'}}>{bet.awayMoneyLine}</Text>
            </View>
            <View style={styles.textRow}>
            <View style={{}}>
        <Text style={{color: '#fff'}}>Enter</Text>
        <Text style={{color: '#fff'}}>Amount</Text>
        </View>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={setWager} placeHolder="Bet Amount"></TextInput>
        </View>
            {/* <Text style={{color: '#fff'}}>{wager}</Text> */}
            {/* <TextInput style={styles.input} keyboardType="numeric" onChangeText={setWager}></TextInput> */}
            {/* <View style={styles.quickBets}>
                <TouchableOpacity style={styles.quickBet}><Text style={{color: '#fff'}}>CLR</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickBet} onPress={() => {calculateThisBet(bet.betID, 5)}}><Text style={{color: '#fff'}}>$5</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickBet} onPress={() => {calculateThisBet(bet.betID, 10)}}><Text style={{color: '#fff'}}>$10</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickBet} onPress={() => {calculateThisBet(bet.betID, 20)}}><Text style={{color: '#fff'}}>$20</Text></TouchableOpacity>
                <TouchableOpacity style={styles.quickBet} onPress={() => {calculateThisBet(bet.betID, 100)}}><Text style={{color: '#fff'}}>$50</Text></TouchableOpacity>
            </View> */}
            {currentCalculatedBet.id == bet.betID &&
            <Text style={{color: '#fff'}}>
            {currentCalculatedBet.calculatedBet}
            </Text>
            }   
            <TouchableOpacity style={styles.placeBet} onPress={() => calculateBet(bet)}><Text style={{color: '#fff', textAlign: 'center'}}>Place Bet</Text></TouchableOpacity>
            <TouchableOpacity style={styles.deleteBet}><Text style={{color: '#b60437', fontSize: 14, textAlign: 'center'}}>Delete Bet</Text></TouchableOpacity>
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
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    betHeaderBetInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },  
    input: {
        height: 40,
        width: 120,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#37bcc2',
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
        backgroundColor: '#1e1e1e',
        color: '#fff',
        width: 50,
        height: 50,
        borderRadius: 4,
        textAlign: 'center',
      },
      placeBet: {
          backgroundColor: '#3471c3',
          justifyContent: 'space-around',
          paddingVertical: 12
      },
      deleteBet: {
          paddingTop: 8,
          marginTop: 8
      },
      textRow: {
        flexDirection: 'row',
        alignItems: 'center',

    }
})