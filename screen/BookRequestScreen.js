import * as React from 'react'
import { StyleSheet, Text, TextInput, View,TouchableOpacity,Alert, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase  from 'firebase';
import AppHeader from '../components/AppHeader'

export default class BookRequestScreen extends React.Component {
    constructor (){
        super()
        this.state={
            userId: firebase.auth().currentUser.email,
             BookName:"",
             ReasonToRequest:"",
             description:"",
             randomRequestId:""

        }
    }
    createUniqueTd(){
        return Math.random().toString(36).subString(7);
      }

addRequest=(BookName,ReasonToRequest)=>{
var userId = this.state.userId
var randomRequestId = this.createUniqueTd ()
db.collection('requested_books').add({
    "user_Id":userId,
    "Book_Name":BookName,
    "Reason_To_Request":ReasonToRequest,
    "request_Id":randomRequestId
})
this.setState({
    BookName:"",
    ReasonToRequest:""
})
return Alert.alert("Book Requested Succesfully")
}
render(){
    this.render(
        <View>
        <AppHeader></AppHeader>
        <KeyboardAvoidingView>
        <TextInput
        placeholder={"Book Name "}
        onChangeText={(text)=>{
         this.setState({
             BookName:text
         })
        }}
        value = {this.state.BookName}
        ></TextInput>

        <TextInput
        multiline
        numberOfLines={8}
        placeholder={"why do you need the book"}
        onChangeText={(text)=>{
           this.setState=({
               description:text
           })
        }}
        value={this.state.description}
        ></TextInput>
        <TouchableOpacity
        onPress={()=>{}}
        >
        <Text>Request</Text>
        </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
    )
}
}
const style = StyleSheet.create({
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
     },
     button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#ff5722',
        borderRadius:10,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.44,
        shadowRadius:10.32,
        elevation:16,
        marginTop:20
     }
})