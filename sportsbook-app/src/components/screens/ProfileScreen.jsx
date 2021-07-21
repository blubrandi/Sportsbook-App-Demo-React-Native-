import React from 'react'
import { Image, StyleSheet, ScrollView, TouchableOpacity, Text, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.profileOptionsRow}>            
            <TouchableOpacity style={styles.profileOoptions}>
            <MaterialCommunityIcons name="account-details" size={120} color="#3471c3" />
            <Text style={{color: '#fff'}}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileOoptions}>
            <MaterialIcons name="attach-money" size={120} color="#3471c3" />
            <Text style={{color: '#fff'}}>Payment Methods</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.profileOptionsRow}>
            <TouchableOpacity style={styles.profileOoptions}>
            <MaterialIcons name="account-balance-wallet" size={120} color="#3471c3" />
            <Text style={{color: '#fff'}}>Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileOoptions}>
            <MaterialCommunityIcons name="history" size={120} color="#3471c3" />
            <Text style={{color: '#fff'}}>Transaction History</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.profileOptionsRow}>
            <TouchableOpacity style={styles.profileOoptions}>
            <MaterialIcons name="settings" size={120} color="#3471c3" />
            <Text style={{color: '#fff'}}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileOoptions}>
            <MaterialIcons name="contact-support" size={120} color="#3471c3" />
            <Text style={{color: '#fff'}}>Support</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    viewStyle: {
    backgroundColor: '#161616',
    flex: 1, 
    justifyContent: 'flex-start',
    alignItems: 'center',
    },
    profileOptionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20
    },
    profileOoptions: {
        height: 180,
        width: 180,
        backgroundColor: '#1e1e1e',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        shadowColor: "#000", 
        shadowOffset:{ 
        width: 0, 
        height: 2, 
        }, 
        shadowOpacity: 0.27, 
        shadowRadius: 4.65, 
        elevation: 4,
        borderRadius: 12
    }
})