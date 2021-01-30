import react from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {CustomSideBarMenu} from '../components/customSideBarMenu'
const AppDrawerNavigator = createDrawerNavigator({
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