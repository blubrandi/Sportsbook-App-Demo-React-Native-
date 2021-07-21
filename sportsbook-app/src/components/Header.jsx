import React from 'react'
import { Image, SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

import { SportSelector } from './sports';
import { FavoritesScreen } from './Exports';
import Logo from '../assets/logo.png'
import { RewardsScreen } from './Exports';

const Header = (props) => {

    return (
        <>
        <View>
            <LinearGradient 
            colors={['#161616', '#2D2A2A']}
            start={[0, 1]}
            end={[1, 0]}
            style={styles.viewStyle}
            >
                <View style={styles.headerContainer}>
                <AntDesign name="menufold" size={24} color="#d49e0f" />
                <Image source={Logo}></Image>
                <View>
                <Text style={{color: '#fcc31f', fontSize: 14}}>$2764</Text>
                <Text style={{color: '#fcc31f', fontSize: 12}}>+ Funds</Text>
                </View>
                </View>
            </LinearGradient>
            
        </View>
        
        
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    viewStyle: {
    backgroundColor: '#161616',
    paddingTop: 40,
    paddingBottom: 40,
    height: 120,
    alignItems: 'center'
    }, 
    whiteText: {
        color: '#fff'
    },
    headerContainer: {
        width: '96%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    }
})