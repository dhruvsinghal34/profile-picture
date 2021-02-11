import react from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {CustomSideBarMenu} from '../components/customSideBarMenu'
import MyBartersScreen from './myBartersScreen'
const AppDrawerNavigator = createDrawerNavigator({
    MyBarters:{
     screen:MyBartersScreen
    },
    Home:{
        screen:TabNavigator
    },
  Setting:{
      screen:SettingScreen
  }
},
{contentComponent:CustomSideBarMenu},
{initialRouteName:'Home'}
)