import React, { useState } from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

const SportSelector = () => {

    const [selectedSport, setSelectedSport] = useState('')
    const [selectedLeague, setSelectedLeague] = useState('')

    const baseBallLeagues = [
        "MLB",
        "MiLB",
        "National League",
        "American League"
    ]

    const showLeagues = (props) => {
        setSelectedSport(props)
    }

    const selectLeague = (props) => {
        setSelectedLeague(props)
    }

    return (
        <>
        <View>
            <ScrollView contentContainerStyle={styles.sportSelectContainer} horizontal={true}>
                
                <TouchableOpacity onPress={() => showLeagues("baseball")}>
                    <Ionicons style={styles.icon} name="baseball-outline" key={"baseball"} size={48} color="#fff"  />            
                 </TouchableOpacity>
                 
                 <TouchableOpacity onPress={() => showLeagues("football")}>
                 <FontAwesome5 style={styles.icon} name="football-ball" key={"football"} size={38} color="#fff" />            
                 </TouchableOpacity>
                
                 <TouchableOpacity onPress={() => showLeagues("soccer")}>
                 <Ionicons style={styles.icon} name="football-outline" key={"soccer"} size={48} color="#fff" />           
                 </TouchableOpacity>
                 
                 <TouchableOpacity onPress={() => showLeagues("basketball")}>
                 <FontAwesome5 style={styles.icon} name="basketball-ball" key={"basketball"} size={38} color="#fff" />    
                 </TouchableOpacity>
                
                 <TouchableOpacity onPress={() => showLeagues("golf")}>
                    <FontAwesome5 style={styles.icon} name="golf-ball" key={"golf"} size={38} color="#fff" />           
                 </TouchableOpacity>
                 
                 <TouchableOpacity onPress={() => showLeagues("tennis")}>
                    <Ionicons style={styles.icon} name="tennisball-outline" key={"tennis"} size={48} color="#fff" />               
                 </TouchableOpacity>

                 <TouchableOpacity onPress={() => showLeagues("horse")}>
                    <FontAwesome5 style={styles.icon} name="horse-head" key={"horse"} size={38} color="#fff" />           
                 </TouchableOpacity>
            </ScrollView>
            <View style={styles.leagueNames}>
                {selectedSport == "baseball" &&
                    baseBallLeagues.map((baseballLeague) => {
                        return(
                           <TouchableOpacity onPress={() => selectLeague(baseballLeague)}><Text>{baseballLeague}</Text></TouchableOpacity>
                        )
                    })
                }
                {selectedSport == "football" &&
                <Text>football</Text>
                }
                {selectedSport == "soccer" &&
                <Text>soccer</Text>
                }
                {selectedSport == "basketball" &&
                <Text>basketball</Text>
                }
                {selectedSport == "golf" &&
                <Text>golf</Text>
                }
                {selectedSport == "tennis" &&
                <Text>tennis</Text>
                }
                {selectedSport == "horse" &&
                <Text>horse</Text>
                }
                
            </View>
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
        // paddingTop: 20,
        // paddingBottom: 40,
        paddingHorizontal: 100,
        height: 90
    },
    icon: {
        padding: 0,
    },
    leagueNames: {
        color: '#fff',
        backgroundColor: '#555',
        height: 40,
    }

})

