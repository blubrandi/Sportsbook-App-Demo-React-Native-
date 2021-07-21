import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { AutoLogo } from '../../assets/auto-logo.png'
import { BurgerLogo } from '../../assets/burger-logo.png'
import { ChefLogo } from '../../assets/chef-logo.png'
import { CoffeeLogo } from '../../assets/coffee-logo.png'
import { ElectricianLogo } from '../../assets/electrician-logo.png'
import { FishLogo } from '../../assets/fish-logo.png'
import { HopsLogo } from '../../assets/hops-logo.png'
import { NatureLogo } from '../../assets/nature-logo.png'
import { VeggieLogo } from '../../assets/veggie-logo.png'

const RewardsScreen = () => {
    return (
        <>
        <ImageBackground source={require('../../assets/stadium-lights.png')} resizeMode="cover" style={styles.header}>
            <View style={styles.headerTextContainer}> 
            <Text style={styles.headerTextTitle}>BET MORE, SAVE MORE.</Text>
            <Text style={styles.headerText}>Earn TRIPLE rewards every Thursday in July!</Text>
            </View>
        </ImageBackground>

        <LinearGradient 
            colors={['#d02e42', '#b60437']}
            start={[0, 1]}
            end={[1, 0]}
            style={styles.gameListHeader}>
            <View style={styles.pointsAndRewards}>

            <Text style={styles.pointsAndRewardsText}>Available Points</Text>
            <Text style={styles.pointsAndRewardsText}>3,549</Text>
        </View>
        </LinearGradient>

        <ScrollView style={styles.rewardscreencontainer}>
        <View style={styles.rewardContainer}>
            <View style={styles.rewardLogo}>
                <Image source={require('../../assets/auto-logo.png')} style={{width: 100, height: 100}}></Image>
            </View>
            <View style={styles.rewardText}>
                <Text style={{color: '#fff', fontSize: 16}}>The Works Oil Change for $19.99</Text>
            </View>
            <View style={styles.rewardPoints}>
                <Text style={{color: '#fff', fontSize: 16}}>1200</Text>
            </View>
        </View>
        {/* <View style={styles.rewardContainer}>
            <View style={styles.rewardLogo}>
                <Image source={require('../../assets/burger-logo.png')} style={{width: 100, height: 100}}></Image>
            </View>
            <View style={styles.rewardText}>
            <Text style={{color: '#fff', fontSize: 16}}>Buy 1, Get 1 on Any Burger Combo</Text>
            </View>
            <View style={styles.rewardPoints}>
            <Text style={{color: '#fff', fontSize: 16}}>400</Text>
            </View>
        </View> */}
        <View style={styles.rewardContainer}>
            <View style={styles.rewardLogo}>
                <Image source={require('../../assets/chef-logo.png')} style={{width: 100, height: 100}}></Image>
            </View>
            <View style={styles.rewardText}>
            <Text style={{color: '#fff', fontSize: 16}}>Save 20% off Entire Dinner Check</Text>
            </View>
            <View style={styles.rewardPoints}>
            <Text style={{color: '#fff', fontSize: 16}}>2700</Text>
            </View>
        </View>
        <View style={styles.rewardContainer}>
            <View style={styles.rewardLogo}>
                <Image source={require('../../assets/coffee-logo.png')} style={{width: 100, height: 100}}></Image>
            </View>
            <View style={styles.rewardText}>
            <Text style={{color: '#fff', fontSize: 16}}>(2) Free Large Premium Coffees</Text>
            </View>
            <View style={styles.rewardPoints}>
            <Text style={{color: '#fff', fontSize: 16}}>700</Text>
            </View>
        </View>
        <View style={styles.rewardContainer}>
            <View style={styles.rewardLogo}>
                <Image source={require('../../assets/electrician-logo.png')} style={{width: 100, height: 100}}></Image>
            </View>
            <View style={styles.rewardText}>
            <Text style={{color: '#fff', fontSize: 16}}>Free Home Electrical Inspection</Text>
            </View>
            <View style={styles.rewardPoints}>
            <Text style={{color: '#fff', fontSize: 16}}>1100</Text>
            </View>
        </View>
        <View style={styles.rewardContainer}>
            <View style={styles.rewardLogo}>
                <Image source={require('../../assets/fish-logo.png')} style={{width: 100, height: 100}}></Image>
            </View>
            <View style={styles.rewardText}>
            <Text style={{color: '#fff', fontSize: 16}}>Dinner for Two, includes (2) Appetizers, (2) Entrees, (2) Desserts, and (2) Drinks for $79.</Text>
            </View>
            <View style={styles.rewardPoints}>
            <Text style={{color: '#fff', fontSize: 16}}>6000</Text>
            </View>
        </View>
        {/* <View style={styles.rewardContainer}>
            <View style={styles.rewardLogo}>
                <Image source={require('../../assets/hops-logo.png')} style={{width: 100, height: 100}}></Image>
            </View>
            <View style={styles.rewardText}>

            </View>
            <View style={styles.rewardPoints}>

            </View>
        </View>
        <View style={styles.rewardContainer}>
            <View style={styles.rewardLogo}>
                <Image source={require('../../assets/nature-logo.png')} style={{width: 100, height: 100}}></Image>
            </View>
            <View style={styles.rewardText}>

            </View>
            <View style={styles.rewardPoints}>

            </View>
        </View>
        <View style={styles.rewardContainer}>
            <View style={styles.rewardLogo}>
                <Image source={require('../../assets/veggie-logo.png')} style={{width: 100, height: 100}}></Image>
            </View>
            <View style={styles.rewardText}>

            </View>
            <View style={styles.rewardPoints}>

            </View>
        </View> */}
        <View style={{height: 200}}></View>
        </ScrollView>
        </>
    )
}

export default RewardsScreen

const styles = StyleSheet.create({
    rewardscreencontainer: {
        backgroundColor: '#161616',
        paddingBottom: 140
    },
    header: {
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextContainer: {

    },
    headerTextTitle: {
        color: '#fff',
        fontSize: 28
    },
    headerText: {
        color: '#fcc31f',
        fontSize: 18
    },
    pointsAndRewards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        // backgroundColor: '#161616'
    },
    pointsAndRewardsText: {
        color: '#fff',
        fontSize: 16
    },
    rewardContainer: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#191919',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rewardLogo: {
        width: '20%',
    },
    rewardText: {
        width: '56%'
    },
    rewardPoints: {
        borderLeftWidth: 2,
        borderLeftColor: '#191919'
    }

})