import React from 'react'
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native'

const Team = props => {

    return (
       <Text>{props.team.Name}</Text>
    )
}


export default Team

