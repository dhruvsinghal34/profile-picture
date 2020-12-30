import * as React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonateScreen from '../screens/BookDonateScreen'
import BookRequestScreen from '../screens/BookRequestScreen'

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks : {
        screen:BookDonateScreen,
        NavigationOptions : {
            tabBarIcon: <Image source={require("../images/download.png")} style={{width:20,Height:20}}></Image>,
            tabBarLabel:"book donate"
        }
    },
    RequestBooks : {
        screen:BookRequestScreen,
        NavigationOptions : {
            tabBarIcon: <Image source={require("../images/download(1).png")} style={{width:20,Height:20}}></Image>,
            tabBarLabel:"book Request"
        }
    },
    
})