import  React, { useState } from 'react'
import { useEffect } from 'react'
import { ScrollView, SegmentedControlIOSComponent, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { pendingBetRemoved, betStatusChanged } from '../bets/betsSlice'

const BetslipScreen = (props) => {

    const pendingBets = useSelector(state => state.bets)
    const dispatch = useDispatch()

    const [shouldShowPendingBets, setShouldShowPendingBets] = useState(true)
    const [shouldShowPlacedBets, setShouldShowPlacedBets] = useState(false)

    const showPendingBets = () => {
        setShouldShowPendingBets(true)
        setShouldShowPlacedBets(false)
    }

    const showPlacedBets = () => {
        setShouldShowPendingBets(false)
        setShouldShowPlacedBets(true)
    }

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

        // console.log("Bet: ", y, "Profit: ", Math.round(parseInt(a) - parseInt(y)), "Payout: ", a)

        handleTapPlaceBet(betID)

    }

    handleTapPlaceBet = (props) => {
        console.log("HANDLE PROPS: ", props)
        let focusedBet = pendingBets.find(element => element.betID == props)
        // focusedBet.betWager = wager
        // dispatch(pendingBetRemoved(focusedBet))
        dispatch(betStatusChanged(focusedBet))
        alert("Bet Placed!")
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

    // useEffect(() => {
    //     console.log(filterTheseBets)

    //   }, [])

    const filterThesePendingBets = pendingBets.filter(pendingBet => {
        return pendingBet.betPending
    })
    
    const filteredPendingBets = filterThesePendingBets.map(bet => {

        return (
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
        {/* <Text style={{color: '#fff'}}>{wager}</Text> */}
        <View style={styles.textRow}>
            <View style={{}}>
        <Text style={{color: '#fff'}}>Enter</Text>
        <Text style={{color: '#fff'}}>Amount</Text>
        </View>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={setWager} placeHolder="Bet Amount"></TextInput>
        </View>
        <View style={styles.quickBets}>
        </View>
        {currentCalculatedBet.id == bet.betID &&
        <Text style={{color: '#fff'}}>
        {currentCalculatedBet.calculatedBet}
        </Text>
        }   
        <TouchableOpacity style={styles.placeBet} onPress={() => calculateBet(bet)}><Text style={{color: '#fff', textAlign: 'center'}}>Place Bet</Text></TouchableOpacity>
        <TouchableOpacity style={styles.deleteBet}><Text style={{color: '#b60437', fontSize: 14, textAlign: 'center'}}>Delete Bet</Text></TouchableOpacity>
    </View>
        )
    })

    const filterThesePlacedBets = pendingBets.filter(pendingBet => {
        return !pendingBet.betPending
    })

    const filteredPlacedBets = filterThesePlacedBets.map(bet => {

        return (
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
            </View>
        )
        })

  


    return (
        <>

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.headerButton} onPress={() => {showPendingBets()}}>
            <Text style={{color: '#fff'}}>Pending Bets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton} onPress={() => {showPlacedBets()}}>
            <Text style={{color: '#fff'}}>Placed Bets</Text>
        </TouchableOpacity>
        </View>

        <ScrollView style={{backgroundColor: '#161616'}}>

            <View>
            { shouldShowPendingBets ?
                <View>
                    {filteredPendingBets}
                </View>
                :
                <View>
                {filteredPlacedBets}
                </View>
            }   
            </View>




        </ScrollView>
        </>
    )
}

export default BetslipScreen

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#161616', 
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 40
    },
    headerButton: {
        backgroundColor: '#3471c3',
        padding: 16,
        borderRadius: 6
    },
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