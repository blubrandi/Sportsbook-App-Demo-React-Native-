import  React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
// import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons'
import axios from 'axios'

import { Team, SportSelector } from '../Exports'
import Stadium from '../../assets/baseball-stadium.jpg'
import AdOne from '../../assets/ad-1.jpg'

const HomeScreen = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        getNews()
        getDate()
    }, [])

    getNews = async () => {
        await axios.get('https://api.sportsdata.io/v3/mlb/scores/json/News?key=df194af6ada54af983b9667771d8aa72')
        .then(res => {
            res.data

            setNews(res.data)
            console.log(news)
        })
        .catch(err => console.log("Error getting news: ", err))

    }

    getDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        console.log("Today: ", today)
    }




        return (
            <>
            <View style={{backgroundColor: '#161616', flex: 1}}>
                <Image source={Stadium} style={{height: 200, alignSelf: 'center'}}></Image>
                <View style={{alignContent: 'center'}}>
                {/* <Image source={AdOne} style={{height: 100}}></Image> */}
                <ScrollView style={{backgroundColor: '#161616', width: '100%'}}>
                {news.map(article => {
                    return (
                        <View key={article.NewsID} style={{backgroundColor: '#222', width: '94%', alignSelf: 'center', padding: 20, marginVertical: 8}}>
                            <Text style={{color: '#fff', fontSize: 20, paddingBottom: 8}}>{article.Title}</Text>
                            <Text numberOfLines={3} style={{color: '#fff', fontSize: 16}}>{article.Content}</Text>
                    </View>
                    )
                })}
            
            </ScrollView>
                </View>
            </View>

            </>
        )
}

export default HomeScreen


const styles = StyleSheet.create({
    gameList: {
        // flexGrow: 1,
        // backgroundColor: 'purple',
        // color: '#fff',
        // width: '100%'
    },
    imageContainer: {
        width: '88%',
        alignItems: 'center'
    },
    whiteText: {
        color: '#fff'
    }
})
