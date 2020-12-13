import React from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity,Alert} from 'react-native';
import firebase from 'firebase'

export default class Welcome extends React.Component{
    constructor(){
        super()
        this.state={
            EmailID:"",
            Password:""
        }
    }

    userLogin = async (emailId,Password) => {
        firebase.auth().signInWithEmailAndPassword(emailId,Password).then(()=>{
            return Alert.alert("login in  is succesfully been done ")
        }).catch((error)=>{
           var errorMessage=error.message
           return Alert.alert(errorMessage)
        })
      }
  
  userSignup = async (emailId,Password) => {
     firebase.auth().createUserWithEmailAndPassword(emailId,Password).then(()=>{
         return Alert.alert("user is added succesfully")
     }).catch((error)=>{
      var errorMessage=error.message
      return Alert.alert(errorMessage)
     })
  }
  
     render(){
        return(
            <View style={styles.container}>
            <TextInput
            style={styles.inputBox}
            placeholder="Enter your Email ID"
            keyboardType="email-address"
            onChangeText={text => this.setState({EmailID:text})}
            value={this.state.EmailID}
            ></TextInput>
            <TextInput
             style={styles.inputBox}
             placeholder="Enter your Password"
             secureTextEntry={true}
             onChangeText={text => this.setState({Password:text})}
            value={this.state.Password}
            ></TextInput>

          <TouchableOpacity style={styles.button}
             onPress={()=>{this.userLogin(this.state.EmailId, this.state.Password)}}> 
            <Text>
            login in 
            </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
           onPress={()=>{ this.userSignUp(this.state.EmailId, this.state.Password)}}> 
            <Text>
            sign up 
            </Text>
            </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
     inputBox: {
      marginTop: 0,
      marginBottom:80,
      width: '190%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,

    },
    button: {
        marginTop: 40,
        marginLeft: 60,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 30,
        backgroundColor: 'blue',
      },
  });