import React, { useEffect, setState, useState, useInterval, Component } from 'react'
import axios from 'axios'
import { Button, Image, StyleSheet, ScrollView, TouchableOpacity, Text, TextInput, View } from 'react-native'
import Modal from "react-native-modal";

import Bet from '../bets/Bet'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { pendingBetAdded } from '../bets/betsSlice' 
import PendingBetslip from '../bets/PendingBetslip'
import { render } from 'react-dom'

// import * as All from '../../assets/team-logos'

// import Game from './Game '

const GameList = (props) => {

    const dispatch = useDispatch()

    const [scheduleData, setScheduleData] = useState([])
    const [homeTeams, setHomeTeams] = useState([])
    const [selectedLeague, setSelectedLeage] = useState(props.selectedLeague)
    const [isLoading, setIsLoading] = useState(true)

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getSchedules()
      }, [])

      const toggleModal = () => {
        setShowModal(!showModal)
      }

   getSchedules = async () => {
        await axios.get('https://fly.sportsdata.io/v3/mlb/odds/json/AlternateMarketGameOddsByDate/2021-07-05?key=df194af6ada54af983b9667771d8aa72')
        .then(res => {

            res.data

            setScheduleData(res.data)
            setIsLoading(false)
            console.log(scheduleData)
        })
        .catch(err => console.log("Error getting schedules: ", err))
    }

    formatDate = (date) => {
        let formattedDate = new Date(Date.parse(date)).toString()
        return formattedDate
    }

    imageSelect = (teamName) => {
        
        switch (teamName) {
            case 'ARI':
                return require('../../assets/team-logos/ARI.png') 
            case "ATL":
                return require('../../assets/team-logos/ATL.png') 
            case "BAL":
                return require('../../assets/team-logos/BAL.png') 
            case "BOS":
                return require('../../assets/team-logos/BOS.png') 
            case "CHC":
                return require('../../assets/team-logos/CHC.png') 
            case "CHW":
             return require('../../assets/team-logos/CHW.png') 
            case "CIN":
                return require('../../assets/team-logos/CIN.png') 
            case "CLE":
                return require('../../assets/team-logos/CLE.png') 
            case "COL":
                return require('../../assets/team-logos/COL.png') 
            case "DET":
                return require('../../assets/team-logos/DET.png') 
            case "HOU":
                return require('../../assets/team-logos/HOU.png') 
            case "KC":
                return require('../../assets/team-logos/KC.png') 
            case "LAA":
                return require('../../assets/team-logos/LAA.png') 
            case "LAD":
                return require('../../assets/team-logos/LAD.png') 
            case "MIA":
                return require('../../assets/team-logos/MIA.png') 
            case "MIL":
                return require('../../assets/team-logos/MIL.png') 
            case "MIN":
                return require('../../assets/team-logos/MIN.png') 
            case "NYM":
                return require('../../assets/team-logos/NYM.png') 
            case "NYY":
                return require('../../assets/team-logos/NYY.png') 
            case "OAK":
                return require('../../assets/team-logos/OAK.png') 
            case "PHI":
                return require('../../assets/team-logos/PHI.png') 
            case "PIT":
                return require('../../assets/team-logos/PIT.png') 
            case "SD":
                return require('../../assets/team-logos/SD.png') 
            case "SEA":
                return require('../../assets/team-logos/SEA.png') 
            case "SF":
                return require('../../assets/team-logos/SF.png') 
            case "STL":
                return require('../../assets/team-logos/STL.png') 
            case "TB":
                return require('../../assets/team-logos/TB.png') 
            case "TEX":
                return require('../../assets/team-logos/TEX.png') 
            case "TOR":
                return require('../../assets/team-logos/TOR.png') 
            case "WSH":
                return require('../../assets/team-logos/WSH.png') 
            default:
                break

        }

        console.log(teamName)
    } 

    formatTeamName = (teamName) => {

        switch (teamName) {
            case 'ARI':
                return 'Arizona Diamondbacks' 
            case "ATL":
                return 'Atlanta Braves'
            case "BAL":
                return 'Baltimore Orioles' 
            case "BOS":
                return 'Boston Red Sox'
            case "CHC":
                return 'Chicago Cubs'
            case "CHW":
                return 'Chicago White Sox' 
            case "CIN":
                return 'Cincinnati Reds' 
            case "CLE":
                return 'Cleveland Indians' 
            case "COL":
                return 'Colorado Rockies' 
            case "DET":
                return 'Detroit Tigers' 
            case "HOU":
                return 'Houston Astros' 
            case "KC":
                return 'Kansas City Royals' 
            case "LAA":
                return 'Los Angeles Angels' 
            case "LAD":
                return 'LA Dodgers' 
            case "MIA":
                return 'Miami Marlins' 
            case "MIL":
                return 'Milwalkee Brewers' 
            case "MIN":
                return 'Minnesota Twins' 
            case "NYM":
                return 'New York Mets' 
            case "NYY":
                return 'New York Yankees' 
            case "OAK":
                return 'Oakland Athletics' 
            case "PHI":
                return 'Philadelphia Phillies' 
            case "PIT":
                return 'Pittsburg Pirates' 
            case "SD":
                return 'San Diego Padres' 
            case "SEA":
                return 'Seattle Mariners' 
            case "SF":
                return 'San Francisco Giants' 
            case "STL":
                return 'St. Louis Cardinals'
            case "TB":
                return 'Tampa Bay Rays' 
            case "TEX":
                return 'Texas Rangers' 
            case "TOR":
                return 'Toronto Blue Jays' 
            case "WSH":
                return 'Washington Nationals' 
            default:
                break

        }
    }

    getNanoID = () => {
        return nanoid(6)
    }

    createMoneyLine = (props) => {

        // console.log("PROPS: ", props)

        let gameID = props.GameId
        
        let betID = nanoid(6)
        let awayTeamName = formatTeamName(props.AwayTeamName)
        let homeTeamName = formatTeamName(props.HomeTeamName)
        let betType = 'moneyLine'
        let homeMoneyLine = props.AlternateMarketPregameOdds[0].HomeMoneyLine
        let awayMoneyLine = props.AlternateMarketPregameOdds[0].AwayMoneyLine
        // // let homePointSpread = props.homePointSpread
        // // let awayPointSpread = props.awayPointSpread
        // // let homePointSpreadPayout = props.homePointSpreadPayout
        // // let awayPointSpreadPayout = props.awayPointSpreadPayout
        // // let overUnder = props.overUnder
        // // let overPayout = props.overPayout
        // // let underPayout = props.underPayout
        // let wager = props.wager
        // let potentialWinnings = props.potentialWinnings
        // let potentialPayout = props.potentialPayout

        // let y = 20
        // let a = (y * Math.abs(props/100)) + y
        
        // console.log("Bet: ", y, "Profit: ", Math.round(a - y), "Payout: ", a)
        // console.log(props)

        let newBet = Bet({gameID, betID, betType, homeMoneyLine, awayMoneyLine, awayTeamName, homeTeamName})
        // console.log("NEW BET: ", newBet)
        // console.log("From function: ", props.scheduleObj)

        dispatch(pendingBetAdded(newBet))
        toggleModal()
        // dispatch(setShowModal(true))

        return newBet
    }

    hideModal = () => {
        setShowModal(false)
    }
        return(
            <>
                    {selectedLeague == "MLB" && 
                        isLoading ?
                            <Text>Generating Game Data...</Text> :
                                <>
                            {showModal ?
                                // <View style={{backgroundColor: 'khaki'}}> 
                                <Modal
                                // animationIn={'slideInUp'}
                                backdropOpacity={0}
                                // animationInTiming={600}
                                backdropTransitionInTiming={0}
                                // hasBackdrop={false}
                                style={{borderRadius: '10 10 0 0',justifyContent: 'flex-end',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 6,
                                },
                                shadowOpacity: 0.39,
                                shadowRadius: 8.30,
                                
                                elevation: 13,}}
                                    isVisible={showModal}
                                    
                                    // coverScreen={false}
                                    // propagateSwipe
                                    onBackdropPress={() => {
                                        setShowModal(false)
                                    }}
                                    onRequestClose={() => {
                                        Alert.alert('Modal has been closed.');
                                    }}>
                                        <View style={{backgroundColor: '#161616', height: '60%', borderRadius: 24, justifyContent: 'flex-end'}}>
                                <ScrollView contentContainerStyle={styles.modalScrollView}>
                                    <View style={{}}>
                                <PendingBetslip />
                                </View>
                                </ScrollView>
                                <Button title={'Press Me'}>Press Me</Button>
                                </View>
                                </Modal> 
                                // </View>
                             :
                                <ScrollView>
                                <View style={styles.gameList}>
                                {scheduleData.map((scheduleObj) => {
                                    return (
                                        <View style={styles.gameListItem} key={scheduleObj.GameId}>
                                            
                                            <View style={styles.gameListItemRow}>
                                                <Text style={styles.tealText}>{formatDate(scheduleObj.DateTime)}</Text>
                                                <Text style={styles.lightText}>{scheduleObj.Name}</Text>
                                            </View>

                                            <View style={styles.gameListItemRow}>
                                            <View style={styles.teamInfo}>
                                            <Image style={styles.gameListTeamLogo} source={imageSelect(scheduleObj.AwayTeamName)}></Image>
                                            {/* <Text style={styles.lightText}>{this.formatTeamName(scheduleObj.HomeTeam)}</Text> */}
                                            </View>
                                            <View style={styles.betInfo}>
                                                <View style={styles.betBox}>
                                                    <Text style={styles.lightText}>{scheduleObj.AlternateMarketPregameOdds[0].AwayPointSpread}</Text>
                                                    </View>
                                                <TouchableOpacity onPress={() => createMoneyLine(scheduleObj)} style={styles.betBox}>
                                                    <Text style={styles.lightText}>{scheduleObj.AlternateMarketPregameOdds[0].AwayMoneyLine}</Text>
                                                    </TouchableOpacity>
                                                <View style={styles.betBox}>
                                                    <Text style={styles.lightText}>{scheduleObj.AlternateMarketPregameOdds[0].AwayPointSpreadPayout}</Text>
                                                    </View>
                                            </View>
                                            </View>

                                            <View style={styles.gameListItemRow}>
                                            <View style={styles.teamInfo}>
                                            <Image style={styles.gameListTeamLogo} source={imageSelect(scheduleObj.HomeTeamName)}></Image>
                                            {/* <Text style={styles.lightText}>{this.formatTeamName(scheduleObj.AwayTeam)}</Text> */}
                                            </View>
                                            <View style={styles.betInfo}>
                                                <View style={styles.betBox}>
                                                    <Text style={styles.lightText}>{scheduleObj.AlternateMarketPregameOdds[0].HomePointSpread}</Text>
                                                    </View>
                                                <TouchableOpacity onPress={() => createMoneyLine(scheduleObj.AlternateMarketPregameOdds[0].HomeMoneyLine)} style={styles.betBox}>
                                                    <Text style={styles.lightText}>{scheduleObj.AlternateMarketPregameOdds[0].HomeMoneyLine}</Text>
                                                    </TouchableOpacity>
                                                <View style={styles.betBox}>
                                                    <Text style={styles.lightText}>{scheduleObj.AlternateMarketPregameOdds[0].HomePointSpreadPayout}</Text>
                                                    </View>
                                            </View>
                                            </View>
                                        </View>
                                        )
                                    }).reverse()
                                }
                                </View> 

                            </ScrollView>
                            }
                                                        <View></View>
                              </>  

                        }

            </> 
        )     
}

export default GameList

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    gameList: {
        flexGrow: 1,
        backgroundColor: '#161616',
        color: '#fff',
        width: '100%',
        paddingBottom: 300
    },
    gameListTeamLogo: {
        height: 82,
        width: 82
    },
    lightText: {
        color: '#fff',
        fontSize: 14
    }, 
    gameListItem: {
        flexDirection: 'column',
        padding: 6,
        borderBottomColor: '#222',
        borderBottomWidth: 1
    },
    gameListItemRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 2,
    },
    teamInfo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        // textAlign:  'left',
        width: '20%',
    },
    betInfo: {
        flexDirection: 'row',
        width: '68%',
        justifyContent: 'space-around',
    },
    betBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        // backgroundColor: '#114880',
        // paddingHorizontal: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor:'#229999'
    },
    tealText: {
        color: 'teal'
    },
    modalScrollView: {
        // flexGrow: 1,
        backgroundColor: '#262626',
        borderRadius: 18,
        // justifyContent: 'space-around',
        // alignItems: 'center',
        color: '#fff',
        fontSize: 24,
        padding: 20,
        width: '100%',
        zIndex: -999
    },
})

// const mapStateToProps = ({ pendingBetAdded }) => ({
//     pendingBetAdded
//   });
  
//   export default connect(
//     mapStateToProps,
//     { pendingBetAdded }
//   )(GameList);