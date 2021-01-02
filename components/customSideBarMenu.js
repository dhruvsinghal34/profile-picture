import React from 'react'
import {View,Text,TounchableOpacity} from 'react-native'
import{DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'

export default class CustomSideBarMenu extends React.Component{
  render(){
      return(
          <View style={{flex:1}}>
         <DrawerItems {...this.props}></DrawerItems>
          <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}> 
         <TounchableOpacity style={{justifyContent:'center',padding:10,height:30,width:'100%'}}
          onPress={()=>{
              this.props.navigation.navigate('welcomeScreen')
              firebase.auth().signOut()
          }}>
          <Text>LogOut</Text>
          </TounchableOpacity>
          </View>
          </View>
      )
  }
}