import React, { Children, useState, useEffect } from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { element } from 'prop-types'

import GameList from '../games/GameList'
import { HomeScreen } from '../screens'

const SportSelector = () => {

    const activeColor = "#d49e0e"
    const inactiveColor = "purple"

    const [selectedSport, setSelectedSport] = useState('')
    const [selectedLeague, setSelectedLeague] = useState('')
    const [isActive, setIsActive] = useState(!isActive)
    const [iconColor, setIconColor] = useState(activeColor)

    const baseBallLeagues = [
        "MLB", "MiLB", "National League", "American League", "NCAA"
    ]

    const footballLeagues = [
        "NFL", "NFC", "AFC", "NCAA"
    ]

    const sportIcons = [
    
                <TouchableOpacity onPress={() => showLeagues("baseball")} key={"baseball"}>
                  <Ionicons style={styles.iconPadding} name="baseball-outline" key={"_baseball"} size={48} color={iconColor} />            
                 </TouchableOpacity>,

                <TouchableOpacity style={styles.iconPadding} onPress={() => showLeagues("football")} key={"football"}>
                    <FontAwesome5 style={styles.icon} name="football-ball" key={"_football"} size={38} color={iconColor} />            
                </TouchableOpacity>,

                <TouchableOpacity style={styles.iconPadding} onPress={() => showLeagues("soccer")} key={"soccer"}>
                    <Ionicons style={styles.icon} name="football-outline" key={"_soccer"} size={48} color={iconColor} />           
                </TouchableOpacity>,

                <TouchableOpacity style={styles.iconPadding} onPress={() => showLeagues("basketball")} key={"basketball"}>
                    <FontAwesome5 style={styles.icon} name="basketball-ball" key={"_basketball"} size={38} color={iconColor} />    
                </TouchableOpacity>,

                <TouchableOpacity style={styles.iconPadding} onPress={() => showLeagues("golf")} key={"golf"}>
                    <FontAwesome5 style={styles.icon} name="golf-ball" key={"_golf"} size={38} color={iconColor} />           
                </TouchableOpacity>,

                <TouchableOpacity style={styles.iconPadding} onPress={() => showLeagues("tennis")} key={"tennis"}>
                    <Ionicons style={styles.icon} name="tennisball-outline" key={"_tennis"} size={48} color={iconColor} />               
                </TouchableOpacity>,

                <TouchableOpacity style={styles.iconPadding} onPress={() => showLeagues("horse")} key={"horse"}>
                    <FontAwesome5 style={styles.icon} name="horse-head" key={"_horse"} size={38} color={iconColor} />           
                </TouchableOpacity>,
    ]

    const showLeagues = (props) => {
        setSelectedSport(props)

        switch (selectedSport) {
            case "baseball":
                console.log("from switch")
                break
        }


        console.log(selectedSport)
    }

    const selectLeague = (props) => {
        setSelectedLeague(props)
        console.log(props)

    }

    const sayHello = () => {
        console.log("hello")
    }

    const toggleActive = () => {
        // this.childData.setIsActive( {isActive: !isActive })
        console.log(isActive)
    }

    return (
        <>
        <View>
            <ScrollView contentContainerStyle={styles.sportSelectContainer} horizontal={true}>
                
                 {sportIcons}
                
            </ScrollView>
            <View style={styles.leagueSelectBackground}>
            <ScrollView contentContainerStyle={styles.leagueSelectContainer} horizontal={true}>
                {selectedSport == "baseball" &&
                    baseBallLeagues.map((baseballLeague) => {
                        return(
                            <View style={styles.leagueSelectContainer} key={baseballLeague}>
                                <TouchableOpacity onPress={() => selectLeague(baseballLeague)}><Text style={styles.leagueNames}>{baseballLeague}</Text></TouchableOpacity>
                           </View>
                        )
                    })
                }
                {selectedSport == "football" &&
                    footballLeagues.map((footballLeague) => {
                        return (
                            <View>
                            <TouchableOpacity onPress={() => selectLeague(footballLeague)}><Text style={styles.leagueNames}>{footballLeague}</Text></TouchableOpacity>
                        </View>
                        )
                    })
                }
                {selectedSport == "soccer" &&
                    soccerLeagues.map((soccerLeague) => {
                        return (
                            <View>
                            <TouchableOpacity onPress={() => selectLeague(soccerLeague)}><Text style={styles.leagueNames}>{soccerLeague}</Text></TouchableOpacity>
                        </View>
                        )
                    })
                }
                {selectedSport == "basketball" &&
                    basketballLeagues.map((basketballLeague) => {
                            
                            <TouchableOpacity onPress={() => selectLeague(basketballLeague)}><Text style={styles.leagueNames}>{basketballLeague}</Text></TouchableOpacity>
                    })
                    
                }
                {selectedSport == "golf" &&


                    <View></View>

                    

                }
                {selectedSport == "tennis" &&

                    <View></View>

                }
                {selectedSport == "horse" &&
                    <View></View>

                }
                
            </ScrollView>
            </View>
        </View>
        <View>
            {selectedLeague == "MLB" &&
            <View style={styles.gameList}>
                <GameList selectedLeague={selectedLeague}/>
            </View>
            }

        </View>
        </>
    )
}

export default SportSelector

const styles = StyleSheet.create({
    sportSelectContainer: {
        flexGrow: 1,
        backgroundColor: '#161616',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#fff',
        paddingHorizontal: 100,
        height: 90
    },
    leagueSelectBackground: {
        backgroundColor: '#222'
    },
    leagueSelectContainer: {
        flexGrow: 1,
        backgroundColor: '#222',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        color: '#fff',
        paddingTop: 10
    },
    icon: {
        padding: 0, 
    },
    leagueNames: {
        color: '#797979',
        fontSize: 18,
        height: 40,
    },
    iconPadding: {
        paddingLeft: 10,
        paddingRight: 10
    },


})

