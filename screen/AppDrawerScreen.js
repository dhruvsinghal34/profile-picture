import react from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from '../components/AppTabNavigator'
import {CustomSideBarMenu} from '../components/customSideBarMenu'

export const AppDrawerNavigation = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
},
{
    contentComponent:CustomSideBarMenu  
},
{
    initialRouteName : 'Home'
})