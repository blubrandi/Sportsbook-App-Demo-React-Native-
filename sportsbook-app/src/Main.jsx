import React, { Component } from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native'
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Game, GameList, SportSelector, Team, HomeScreen } from './components/Exports'

function HomeScreenTab() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <SportSelector /> */}
        <HomeScreen />
      </View>
    );
  }
  
  function ProfileScreenTab() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }

  function RewardsScreenTab() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Rewards</Text>
      </View>
    );
  }

  function BetslipScreenTab() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Betslip</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();


export default class Main extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
               <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Home" component={HomeScreenTab} />
                        <Tab.Screen name="Profile" component={ProfileScreenTab} />
                        <Tab.Screen name="Rewards" component={RewardsScreenTab} />
                        <Tab.Screen name="Betslip" component={BetslipScreenTab} />
                    </Tab.Navigator>
                </NavigationContainer>

            </>
        )
    }
}

const styles = StyleSheet.create({

    redText: {
        color: '#ed1532'
    },
    darkGrayBackground: {
        backgroundColor: '#161616',
    }

});