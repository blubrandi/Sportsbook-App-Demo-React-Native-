import React, { useEffect, setState, useState, useInterval, Component } from 'react'
import axios from 'axios'
import { ImageBackground, ActivityIndicator, Button, Image, StyleSheet, ScrollView, TouchableOpacity, Text, TextInput, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Modal from "react-native-modal";

import Bet from '../bets/Bet'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { pendingBetAdded } from '../bets/betsSlice' 
import PendingBetslip from '../bets/PendingBetslip'

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
        // let formattedDate = new Date(Date.parse(date)).toString()
        // return formattedDate
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

    createSingleBet = (props, singleBetType) => {

        let gameID = props.GameId
        let betID = nanoid(6)
        let betOdds
        let payout
        let teamName
        let betType
        let awayTeam = formatTeamName(props.AwayTeamName)
        let homeTeam = formatTeamName(props.HomeTeamName)
        let gameTeams = `${awayTeam} vs ${homeTeam}`

        // let awayTeamName = formatTeamName(props.AwayTeamName)
        // let homeTeamName = formatTeamName(props.HomeTeamName)
        let betPending = true

        // let newBet

        switch (singleBetType) {
            case 'awayMoneyLine':
                betType = 'Money Line'
                teamName = formatTeamName(props.AwayTeamName)
                betOdds = props.AlternateMarketPregameOdds[0].AwayMoneyLine
                payout = props.AlternateMarketPregameOdds[0].AwayMoneyLine
                break

            case 'homeMoneyLine':
                betType = 'Money Line'
                teamName = formatTeamName(props.HomeTeamName)
                betOdds = props.AlternateMarketPregameOdds[0].HomeMoneyLine
                payout = props.AlternateMarketPregameOdds[0].HomeMoneyLine
                break

            case 'awaySpreadPayout':
                betType = 'Spread'
                teamName = formatTeamName(props.AwayTeamName)
                betOdds = props.AlternateMarketPregameOdds[0].AwayPointSpread
                payout = props.AlternateMarketPregameOdds[0].AwayPointSpreadPayout
                break

            case 'homeSpreadPayout':
                betType = 'Spread'
                teamName = formatTeamName(props.HomeTeamName)
                betOdds = props.AlternateMarketPregameOdds[0].HomePointSpread
                payout = props.AlternateMarketPregameOdds[0].HomePointSpreadPayout
                break

            case 'underPayout':
                betType = 'Totals'
                teamName = 'Under Totals'
                betOdds = props.AlternateMarketPregameOdds[0].OverUnder
                payout = props.AlternateMarketPregameOdds[0].UnderPayout
                break
            case 'overPayout':
                betType = 'Totals'
                teamName = 'Over Totals'
                betOdds = props.AlternateMarketPregameOdds[0].OverUnder
                payout = props.AlternateMarketPregameOdds[0].OverPayout
                break
        }

        let newBet = Bet({gameID, betID, betType, teamName, betOdds, payout, betPending, gameTeams})

        dispatch(pendingBetAdded(newBet))
        toggleModal()

        return newBet
    }

    hideModal = () => {
        setShowModal(false)
    }
        return(
            <>
                    {selectedLeague == "MLB" && 
                        isLoading ?
                            // <Text>Generating Game Data...</Text> :
                            <View style={styles.loader}>
                            <ActivityIndicator size="large" style={{marginTop: '45%'}} />
                            </View> :
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
                                        <View style={{backgroundColor: '#161616', height: '70%', borderRadius: 24, justifyContent: 'flex-end'}}>
                                            <Text style={{color: '#fff', fontSize: 24, textAlign: 'center', marginVertical: 8}}>Pending Bets</Text>
                                            <ScrollView contentContainerStyle={styles.modalScrollView}>
                                                <View style={{}}>
                                            <PendingBetslip />
                                            </View>
                                            </ScrollView>
                                            </View>
                                            </Modal> 
                                // </View>
                             :
                                <>
                                <LinearGradient 
                                    colors={['#d02e42', '#b60437']}
                                    start={[0, 1]}
                                    end={[1, 0]}
                                    style={styles.gameListHeader}>
                                <View style={styles.gameListHeaderItems}>
                                    <Text style={styles.gameListHeaderItem}>SPREAD</Text>
                                    <Text style={styles.gameListHeaderItem}>MONEY</Text>
                                    <Text style={styles.gameListHeaderItem}>TOTAL</Text>
                                </View>
                                </LinearGradient>
                                <ScrollView>
                                <View style={styles.gameList}>
                                {scheduleData.map((scheduleObj) => {
                                    return (
                                        <View style={styles.gameListItem} key={scheduleObj.GameId}>
                                            
                                            <View style={styles.gameListItemRow}>
                                            <Text style={styles.headerText}>{formatTeamName(scheduleObj.AwayTeamName)} vs {formatTeamName(scheduleObj.HomeTeamName)}</Text>
                                            {/* <Text>{formatTeamName(scheduleObj.HomeTeamName)}</Text> */}
                                                <Text style={styles.tealText}>{formatDate(scheduleObj.DateTime)}</Text>
                                                
                                            </View>

                                            <View style={styles.gameListItemRow}>
                                            <View style={styles.teamInfo}>
                                            <Image style={styles.gameListTeamLogo} source={imageSelect(scheduleObj.AwayTeamName)}></Image>
                                            </View>
                                            <View style={styles.betInfo}>
                                                <View style={styles.betBox}>
                                                <TouchableOpacity onPress={() => createSingleBet(scheduleObj, "awaySpreadPayout")} style={styles.betBox}>
                                                    <Text style={styles.tealText}>{scheduleObj.AlternateMarketPregameOdds[0].AwayPointSpread}</Text>
                                                    <Text style={styles.lightText}>{scheduleObj.AlternateMarketPregameOdds[0].AwayPointSpreadPayout}</Text>
                                                    </TouchableOpacity>
                                                    </View>
                                                <TouchableOpacity onPress={() => createSingleBet(scheduleObj, "awayMoneyLine")} style={styles.betBox}>
                                                    <Text style={styles.lightText}>{scheduleObj.AlternateMarketPregameOdds[0].AwayMoneyLine}</Text>
                                                    </TouchableOpacity>
                                                <View style={styles.betBox}>
                                                <TouchableOpacity onPress={() => createSingleBet(scheduleObj, "overPayout")} style={styles.betBox}>
                                                    <Text style={styles.tealText}>O</Text>
                                                    <Text style={styles.lightText}>{scheduleObj.AlternateMarketPregameOdds[0].OverPayout}</Text>
                                                    </TouchableOpacity>
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
                                                <TouchableOpacity onPress={() => createSingleBet(scheduleObj, "homeSpreadPayout")} style={styles.betBox}>
                                                    <Text style={styles.tealText}>{scheduleObj.AlternateMarketPregameOdds[0].HomePointSpread}</Text>
                                                    <Text style={styles.lightText}>{scheduleObj.AlternateMarketPregameOdds[0].HomePointSpreadPayout}</Text>
                                                    </TouchableOpacity>
                                                    </View>
                                                <TouchableOpacity onPress={() => createSingleBet(scheduleObj, "homeMoneyLine")} style={styles.betBox}>
                                                    <Text style={styles.lightText}>{scheduleObj.AlternateMarketPregameOdds[0].HomeMoneyLine}</Text>
                                                </TouchableOpacity>
                                                <View style={styles.betBox}>
                                                <TouchableOpacity onPress={() => createSingleBet(scheduleObj, "underPayout")} style={styles.betBox}>
                                                <Text style={styles.tealText}>U</Text>
                                                    <Text style={styles.lightText}>{scheduleObj.AlternateMarketPregameOdds[0].UnderPayout}</Text>
                                                    </TouchableOpacity>
                                                    </View>
                                            </View>
                                            </View>
                                            <View style={styles.moreBetsContainer}>
                                                <TouchableOpacity style={styles.moreBetsButton}>
                                                    <Text style={{textAlign: 'center', color: '#fff', fontSize: 16 }}>+ Bets</Text></TouchableOpacity>
                                            </View>
                                        </View>
                                        )
                                    }).reverse()
                                }
                                </View> 

                            </ScrollView>
                            </>
                            }
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
    loader: {
    flex: 1,
    alignContent: 'center'
    },
    gameListHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#d02e42'
    },
    gameListHeaderItems: {
        flexDirection: 'row',
        width: '68%',
        justifyContent: 'space-around',
        paddingRight: 10,
        marginVertical: 10
    },
    gameListHeaderItem: {
        color: '#dfdfdf',
        fontWeight: '700',
        paddingHorizontal: 14,
        fontSize: 14,
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
        marginVertical: 4
    },
    headerText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#dfdfdf',
        textAlign: 'center'
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
        backgroundColor: '#1e1e1e',
        // paddingHorizontal: 20,
        borderRadius: 4,
        // borderWidth: 1,
        // borderColor:'#229999'
        shadowColor: "#000", 
        shadowOffset:{ 
        width: 0, 
        height: 3, 
        }, 
        shadowOpacity: 0.27, 
        shadowRadius: 4.65, 
        elevation: 6,
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
    moreBetsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 18,
    },
    moreBetsButton: {
        width: '20%', 
        backgroundColor: '#3471c3', 
        padding: 8, 
        borderRadius: 4,
        marginVertical: 10, 
        shadowColor: "#000", 
        shadowOffset:{ 
        width: 0, 
        height: 3, 
        }, 
        shadowOpacity: 0.27, 
        shadowRadius: 4.65, 
        elevation: 6,
    }
})
