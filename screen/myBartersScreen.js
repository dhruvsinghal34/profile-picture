import react from 'react'
import{View,Text,TouchableOpacity,ScrollView,FlatList,StyleSheet} from 'react'
import{Card,Header,Icon} from 'react-native-elements'
import firebase from 'firebase'
export default class MyBartersScreen extends React.Component{
    static navigationOptions = {header:null};

    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            allBarters:[]
        }
    }
    getAllBarters=()=>{
        this.requestRef=db.collection("all_barters").where("donor_id","==",this.state.userId)
        .onSnapshot((snapshot)=>{
            var allBarters = snapshot.docs.map(document=>document.data());
            this.setState({
                allBarters:allBarters
            })
        })
    }
    keyExtractor = (item, index) => index.toString()

   renderItem = ( {item, i} ) =>(
     <ListItem
       key={i}
       title={item.book_name}
       subtitle={"Requested By : " + item.requested_by +"\nStatus : " + item.request_status}
       leftElement={<Icon name="book" type="font-awesome" color ='#696969'/>}
       titleStyle={{ color: 'black', fontWeight: 'bold' }}
       rightElement={
           <TouchableOpacity style={styles.button}>
             <Text style={{color:'#ffff'}}>Send Book</Text>
           </TouchableOpacity>
         }
       bottomDivider
     />
   )
   componentDidMount(){
    this.getAllBarters()
  }

  componentWillUnmount(){
    this.requestRef();
  }

    render(){
        return(
            <View style={{flex:1}}>
            <MyHeader navigation={this.props.navigation} title="My Barters"/>
            <View style={{flex:1}}>
              {
                this.state.allDonations.length === 0
                ?(
                  <View style={styles.subtitle}>
                    <Text style={{ fontSize: 20}}>List of all book Barters</Text>
                  </View>
                )
                :(
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.allBarters}
                    renderItem={this.renderItem}
                  />
                )
              }
            </View>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       },
      elevation : 16
    },
    subtitle :{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    }
  })
  