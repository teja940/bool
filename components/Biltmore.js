import * as React from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, TouchableOpacity, TextPropTypes} from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons, Octicons, AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, Fontisto, Foundation, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import * as firebase from 'firebase'
import { TextInput } from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';
import Moment from 'react-moment';
import 'moment-timezone';


const firebaseConfig = {
  apiKey: "AIzaSyAwhSw_cP28y6uk_DmwI2om15j-8Ke5z5Q",
  authDomain: "booluva-69130.firebaseapp.com",
  databaseURL: "https://booluva-69130.firebaseio.com",
  projectId: "booluva-69130",
  storageBucket: "booluva-69130.appspot.com",
  messagingSenderId: "756275905150",
  appId: "1:756275905150:web:b0dae9254bbad69c934e2f",
  measurementId: "G-KM1GYVZ5BE"
};


// Initialize Firebase
if(firebase.apps.length === 0)
{
  firebase.initializeApp(firebaseConfig);  //--> only initialize if the number of initialized apps within this project is 0
                                            //after writing this basic code, we have to create a database within firebase and set read and write to true
}
else{}



export default function Biltmore()
{
  let [itsLit, setItsLit] = useState(0)
  let [itsAight, setItsAight] = useState(0)
  let [itsDead, setItsDead] = useState(0)
  let [barName, setBarName] = useState('Biltmore')
  let sum = itsLit + itsAight + itsDead
  let [containerLitHeight, setContainerLitHeight] = useState(Math.round(Math.round((itsLit/sum)*100)))
  let [containerAightHeight, setContainerAightHeight] = useState(Math.round(Math.round((itsAight/sum)*100)))
  let [containerDeadHeight, setContainerDeadHeight] = useState(Math.round(Math.round((itsDead/sum)*100)))
  let [biltRatingLimit, setBiltRatingLimit] = useState(0)
  let [litText, setLitText] = useState('')
  let [aightText, setAightText] = useState('')
  let [deadText, setDeadText] = useState('')


  React.useEffect(
    ()=>{
      let mounted = true
      if (mounted){
         itsLitListener()
         itsAightListener()
         itsDeadListener()
      }
         if(itsLit < 1)
         {
           setLitText('0%')
           setContainerLitHeight(0.5)
         }
         else{
           setLitText(String(Math.round((itsLit/sum)*100))+'%')
           setContainerLitHeight(Math.round((itsLit/sum)*100))
         }
   
         if(itsAight < 1)
         {
           setAightText('0%')
           setContainerAightHeight(0.5)
         }
         else{
           setAightText(String(Math.round((itsAight/sum)*100))+'%')
           setContainerAightHeight(Math.round((itsAight/sum)*100))
         }
   
         if(itsDead < 1)
         {
           setDeadText('0%')
           setContainerDeadHeight(0.5)
         }
         else{
           setDeadText(String(Math.round((itsDead/sum)*100))+'%')
           setContainerDeadHeight(Math.round((itsDead/sum)*100))
         }
         return () => mounted = false
        }
  )
  

  async function updateItsLit(itsLit)
  {
    let USERNAME = await SecureStore.getItemAsync('USERNAME')
    //we write the high-score to the firebase database
    firebase.database().ref('bars/'+barName).update({
      itsLit: itsLit+1
    })
    firebase.database().ref('users/'+USERNAME).update({
      biltRatingLimit: biltRatingLimit+1
    })
  }

  async function itsLitListener()
  {
    let USERNAME = await SecureStore.getItemAsync('USERNAME')
    firebase.database().ref('bars/'+barName).on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsLit
      setItsLit(highScore2)
    })
    firebase.database().ref('users/'+USERNAME).on('value', (snapshot)=>{
      var highScore1 = snapshot.val().biltRatingLimit
      setBiltRatingLimit(highScore1)
    })
  }


  async function updateItsAight(itsAight)
  {
    let USERNAME = await SecureStore.getItemAsync('USERNAME')
    //we write the high-score to the firebase database
    firebase.database().ref('bars/'+barName).update({
      itsAight: itsAight+1
    })
    firebase.database().ref('users/'+USERNAME).update({
      biltRatingLimit: biltRatingLimit+1
    })
  }

  async function itsAightListener()
  {
    let USERNAME = await SecureStore.getItemAsync('USERNAME')
    firebase.database().ref('bars/'+barName).on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsAight
      setItsAight(highScore2)
    })
    firebase.database().ref('users/'+USERNAME).on('value', (snapshot)=>{
      var highScore1 = snapshot.val().biltRatingLimit
      setBiltRatingLimit(highScore1)
    })
  }
  

  async function updateItsDead(itsDead)
  {
    let USERNAME = await SecureStore.getItemAsync('USERNAME')
    //we write the high-score to the firebase database
    firebase.database().ref('bars/'+barName).update({
      itsDead: itsDead+1
    })
    firebase.database().ref('users/'+USERNAME).update({
      biltRatingLimit: biltRatingLimit+1
    })
  }

  async function itsDeadListener()
  {
    let USERNAME = await SecureStore.getItemAsync('USERNAME')
    firebase.database().ref('bars/'+barName).on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsDead
      setItsDead(highScore2)
    })
    firebase.database().ref('users/'+USERNAME).on('value', (snapshot)=>{
      var highScore1 = snapshot.val().biltRatingLimit
      setBiltRatingLimit(highScore1)
    })
  }

  
  if(biltRatingLimit < 1)
      {
        return (
          <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{fontSize:25, color: '#6600FF', borderColor: 'black',letterSpacing: 0}}>{barName}</Text>
            </View>
            <View style={styles.iconBox}>
              <View style={styles.fireIconBox}>
                <TouchableOpacity onPress={()=>updateItsLit(itsLit)}>
                  <MaterialCommunityIcons name="fire" size={105} color="#1DE9B6"/>
                </TouchableOpacity>
                <Text style={{color:"#1DE9B6", fontFamily: 'Helvetica-Bold', fontSize: 15}}>It's LIT</Text>
              </View>
              <View style={styles.emojiOkay}>
                <TouchableOpacity onPress = {()=>updateItsAight(itsAight)}>
                  <Entypo name="emoji-neutral" size={85} color="#FFD600"/>
                </TouchableOpacity>
                <Text style={{color:"#FFD600", fontFamily: 'Helvetica-Bold', fontSize: 15}}>It's aight</Text>
              </View>
              <View style={styles.skullBox}>
                <TouchableOpacity onPress = {()=>updateItsDead(itsDead)}>
                  <MaterialCommunityIcons name="skull" size={95} color="#FF1744"/>
                </TouchableOpacity>
                <Text style={{color:"#FF1744", fontFamily: 'Helvetica-Bold', fontSize: 15}}>It's dead</Text>
            </View>
           </View>

           <View style={styles.barbox}>
              <View style={styles.topsubbarbox}>
                <View style={{backgroundColor: '#1DE9B6', width: 30, height: containerLitHeight.toString()+'%' }}/>
                <View style={{backgroundColor: '#FFD600', width: 30, height: containerAightHeight.toString()+'%' }}/>
                <View style={{backgroundColor: '#FF1744', width: 30, height: containerDeadHeight.toString()+'%' }}/>
              </View>
             <View style={styles.subbarbox}>
                <Text style={{fontSize:20, color: "#1DE9B6", borderColor: 'black',letterSpacing: 0}}>{litText}</Text>
                <Text style={{fontSize:20, color: "#FFD600", borderColor: 'black',letterSpacing: 0}}>{aightText}</Text>
                <Text style={{fontSize:20, color: "#FF1744", borderColor: 'black',letterSpacing: 0}}>{deadText}</Text>
              </View>
            </View>

          </View>
        )
      }
      else{
        return (
          <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{fontSize:25, color: '#6600FF', borderColor: 'black',letterSpacing: 0}}>{barName}</Text>
            </View>
            <View style={styles.iconBox}>
              <View style={styles.fireIconBox}>
                  <MaterialCommunityIcons name="fire" size={105} color="#E0F2F1"/>
                <Text style={{color:"#E0F2F1", fontFamily: 'Helvetica-Bold', fontSize: 15}}>It's LIT</Text>
              </View>
              <View style={styles.emojiOkay}>
                  <Entypo name="emoji-neutral" size={85} color="#FFF9C4"/>
                <Text style={{color:"#FFF9C4", fontFamily: 'Helvetica-Bold', fontSize: 15}}>It's aight</Text>
              </View>
              <View style={styles.skullBox}>
                  <MaterialCommunityIcons name="skull" size={95} color="#FFEBEE"/>
                <Text style={{color:"#FFEBEE", fontFamily: 'Helvetica-Bold', fontSize: 15}}>It's dead</Text>
            </View>
           </View>


           <View style={styles.barbox}>
              <View style={styles.topsubbarbox}>
                <View style={{backgroundColor: '#1DE9B6', width: 30, height: containerLitHeight.toString()+'%' }}/>
                <View style={{backgroundColor: '#FFD600', width: 30, height: containerAightHeight.toString()+'%' }}/>
                <View style={{backgroundColor: '#FF1744', width: 30, height: containerDeadHeight.toString()+'%' }}/>
              </View>
             <View style={styles.subbarbox}>
                <Text style={{fontSize:20, color: "#1DE9B6", borderColor: 'black',letterSpacing: 0}}>{litText}</Text>
                <Text style={{fontSize:20, color: "#FFD600", borderColor: 'black',letterSpacing: 0}}>{aightText}</Text>
                <Text style={{fontSize:20, color: "#FF1744", borderColor: 'black',letterSpacing: 0}}>{deadText}</Text>
              </View>
            </View>
            
          </View>)

      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  title: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 1, 
    borderColor: 'black', 
    width: 380, 
    marginTop: 50,
    height: 50
  },
  barbox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    //borderWidth: 1, 
    borderColor: 'black', 
    width: 380, 
    marginTop: 10,
    height: 450
  },
  subbarbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 0.5, 
    borderBottomColor: '#ABB2B9', 
    width: 380, 
    height: 50
  },
  topsubbarbox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    //borderWidth: 1, 
    borderColor: 'black', 
    width: 380, 
    height: 300
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5, 
    borderBottomColor: '#ABB2B9', 
    width: 380, 
    marginTop: 20, 
    height: 150
  },
  fireIconBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 1, 
    borderColor: 'black', 
    width: 125, 
    height: 125,
    paddingBottom: 6
  },
  emojiOkay: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 1, 
    borderColor: 'black', 
    width: 125, 
    height: 125,
  },
  skullBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 1, 
    borderColor: 'black', 
    width: 125, 
    height: 125
  },
  image_container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: 110, 
    height: 90, 
    borderColor: 'black',
    borderWidth: 1, 
    backgroundColor: '#EBF5FB', 
    paddingLeft: 5
  },
  subimagecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300, 
  },
});




/*

<View style={{backgroundColor: '#2ECC71', width: 30, height: Math.round(Math.round((itsLit/sum)*400)) }}/>
                <View style={{backgroundColor: '#F39C12', width: 30, height: Math.round(Math.round((itsLit/sum)*400)) }}/>
                <View style={{backgroundColor: '#E74C3C', width: 30, height: Math.round(Math.round((itsLit/sum)*400)) }}/>




*/