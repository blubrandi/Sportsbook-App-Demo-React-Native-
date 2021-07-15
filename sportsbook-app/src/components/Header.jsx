import React from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { SportSelector } from './sports';


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
                <Text style={styles.whiteText}>Header</Text>
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
    height: 110
    }, 
    whiteText: {
        color: '#fff'
    }
})