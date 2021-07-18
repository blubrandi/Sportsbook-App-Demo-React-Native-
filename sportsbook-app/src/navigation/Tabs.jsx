import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Game, GameList, SportSelector, Team, HomeScreen, ProfileScreen, RewardsScreen, BetslipScreen, FavoritesScreen } from '../components/Exports'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const CustomTabBarButton = ({children, onPress}) => (

    <TouchableOpacity
    style={{
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }}
    onPress={onPress}>
        <View style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            backgroundColor: '#161616'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {

    const tabIconColor = '#d49e0f'
    // const tabIconColor = '#999'


    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    // bottom: 25,
                    // left: 10,
                    // right: 10,
                    elevation: 0,
                    backgroundColor: '#161616',
                    // borderRadius: 50,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                     <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Text>
                            <Ionicons name='home' size={28} color={tabIconColor} />
                        </Text>
                        {/* <Text style={styles.whiteText}> */}
                            {/* Home */}
                        {/* </Text> */}
                     </View>
                )  
            }}/>
                        <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                    <Text>
                        <Ionicons name='star' size={28} color={tabIconColor} />
                    </Text>
                    {/* <Text style={styles.whiteText}>
                        Favorites
                    </Text> */}
                    </View>
                )
            }}/>         
            <Tab.Screen name="Betslip" component={BetslipScreen} options={{
                tabBarIcon: ({focused}) => (
                    <Text>
                        <Ionicons name='receipt' size={40} color={tabIconColor} />
                    </Text>
    
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )   

                // tabBarIcon: 
            }}/>

                <Tab.Screen name="Rewards" component={RewardsScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems :'center', justifyContent: 'center', top: 10}}>
                    <Text>
                        <Ionicons name='ribbon' size={28} color={tabIconColor} />
                    </Text>
                    {/* <Text style={styles.whiteText}>
                        Rewards
                    </Text> */}
                    </View>
                )   
            }}/>

            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Text>
                            <Ionicons name='person-circle-sharp' size={28} color={tabIconColor} />
                        </Text>
                        {/* <Text style={styles.whiteText} >
                            Profile
                        </Text> */}
                    </View>
                )
            }}/>

        </Tab.Navigator>

    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.6,
        elevation: 5
    },
    whiteText: {
        color: '#fff',
        fontSize: 10
    }
})

export default Tabs

        {/* //         screenOptions={({ route }) => ({
        //         tabBarIcon: ({ focused, color, size }) => {
        //         let iconName;

        //         if (route.name === 'Home') {
        //         iconName = focused
        //             ? 'home' : 'home'
        //         } else if (route.name === 'Profile') {
        //         iconName = focused ? 'person-circle-sharp' : 'person-circle-sharp'
        //         } else if (route.name === 'Rewards') {
        //             iconName = focused ? 'ribbon' : 'ribbon'
        //         } else if (route.name === 'Betslip') {
        //             iconName = focused ? 'receipt' : 'receipt'
        //         } else if (route.name === 'Favorites') {
        //             iconName = focused ? 'star' : 'star'
        //         }

        //         return 
        //         },
        //     })} 
        //     tabBarOptions={{
        //         initialRouteName: "Home",
        //         activeBackgroundColor: '#161616',
        //         inactiveBackgroundColor: '#161616',
        //         activeTintColor: '#1398A0',
        //         inactiveTintColor: 'grey',
        //         style: {height: 100},
        // }}> */}