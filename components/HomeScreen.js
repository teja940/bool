import * as React from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, Image, Animated, TouchableOpacity} from 'react-native';
import FirstCarousel from './FirstCarousel'
import { Ionicons, Octicons, AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, Fontisto, Foundation, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import MapView, { Marker } from "react-native-maps";
import firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler';
import HomeHeader from './HomeHeader'
import { useState, useEffect } from 'react';








export default function HomeScreen()
{
  let [boylanitsLit, boylansetItsLit] = useState(0)
  let [boylanitsAight, boylansetItsAight] = useState(0)
  let [boylanitsDead, boylansetItsDead] = useState(0)
  let [boylanTextColor, boylansetTextColor] = useState('')
  let [boylanText, boylansetText] = useState('')
  let [boylanBackgroundColor, boylanSetBackgroundColor] = useState('')


  let [biltitsLit, biltsetItsLit] = useState(0)
  let [biltitsAight, biltsetItsAight] = useState(0)
  let [biltitsDead, biltsetItsDead] = useState(0)
  let [biltTextColor, biltSetTextColor] = useState('')
  let [biltText, biltSetText] = useState('')
  let [biltBackgroundColor, biltSetBackgroundColor] = useState('')

  let [coupesitsLit, coupessetItsLit] = useState(0)
  let [coupesitsAight, coupessetItsAight] = useState(0)
  let [coupesitsDead, coupessetItsDead] = useState(0)
  let [coupesTextColor, coupesSetTextColor] = useState('')
  let [coupesText, coupesSetText] = useState('')
  let [coupesBackgroundColor, coupesSetBackgroundColor] = useState('')

  let [holeitsLit, holesetItsLit] = useState(0)
  let [holeitsAight, holesetItsAight] = useState(0)
  let [holeitsDead, holesetItsDead] = useState(0)
  let [holeTextColor, holeSetTextColor] = useState('')
  let [holeText, holeSetText] = useState('')
  let [holeBackgroundColor, holeSetBackgroundColor] = useState('')

  let [trinitsLit, trinsetItsLit] = useState(0)
  let [trinitsAight, trinsetItsAight] = useState(0)
  let [trinitsDead, trinsetItsDead] = useState(0)
  let [trinTextColor, trinSetTextColor] = useState('')
  let [trinText, trinSetText] = useState('')
  let [trinBackgroundColor, trinSetBackgroundColor] = useState('')

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  //let [barName, setBarName] = useState('Boylan Heights')
  //let sum = itsLit + itsAight + itsDead
  //let containerLitHeight = Math.round(Math.round((itsLit/sum)*100))
  //let containerAightHeight = Math.round(Math.round((itsAight/sum)*100))
  //let containerDeadHeight = Math.round(Math.round((itsDead/sum)*100))

  function boylanItsLitListener()
  {
    firebase.database().ref('bars/Boylan Heights').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsLit
      boylansetItsLit(highScore2)
    })
  }

  function boylanItsAightListener()
  {
    firebase.database().ref('bars/Boylan Heights').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsAight
      boylansetItsAight(highScore2)
    })
  }

  function boylanItsDeadListener()
  {
    firebase.database().ref('bars/Boylan Heights').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsDead
      boylansetItsDead(highScore2)
    })
  }

  function biltItsLitListener()
  {
    firebase.database().ref('bars/Biltmore').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsLit
      biltsetItsLit(highScore2)
    })
  }

  function biltItsAightListener()
  {
    firebase.database().ref('bars/Biltmore').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsAight
      biltsetItsAight(highScore2)
    })
  }

  function biltItsDeadListener()
  {
    firebase.database().ref('bars/Biltmore').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsDead
      biltsetItsDead(highScore2)
    })
  }

  function coupesItsLitListener()
  {
    firebase.database().ref('bars/Coupes').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsLit
      coupessetItsLit(highScore2)
    })
  }

  function coupesItsAightListener()
  {
    firebase.database().ref('bars/Coupes').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsAight
      coupessetItsAight(highScore2)
    })
  }

  function coupesItsDeadListener()
  {
    firebase.database().ref('bars/Coupes').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsDead
      coupessetItsDead(highScore2)
    })
  }

  function holeItsLitListener()
  {
    firebase.database().ref('bars/Hole').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsLit
      holesetItsLit(highScore2)
    })
  }

  function holeItsAightListener()
  {
    firebase.database().ref('bars/Hole').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsAight
      holesetItsAight(highScore2)
    })
  }

  function holeItsDeadListener()
  {
    firebase.database().ref('bars/Hole').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsDead
      holesetItsDead(highScore2)
    })
  }

  function trinItsLitListener()
  {
    firebase.database().ref('bars/Trin').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsLit
      trinsetItsLit(highScore2)
    })
  }

  function trinItsAightListener()
  {
    firebase.database().ref('bars/Trin').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsAight
      trinsetItsAight(highScore2)
    })
  }

  function trinItsDeadListener()
  {
    firebase.database().ref('bars/Trin').on('value', (snapshot)=>{
      var highScore2 = snapshot.val().itsDead
      trinsetItsDead(highScore2)
    })
  }

  React.useEffect(
    ()=>{boylanItsLitListener() 
      boylanItsAightListener()
      boylanItsDeadListener()
      biltItsLitListener()
      biltItsAightListener()
      biltItsDeadListener()
      coupesItsLitListener()
      coupesItsAightListener()
      coupesItsDeadListener()
      holeItsLitListener()
      holeItsAightListener()
      holeItsDeadListener()
      trinItsLitListener()
      trinItsAightListener()
      trinItsDeadListener()
      
      if(boylanitsLit >= boylanitsAight && boylanitsLit >= boylanitsDead)
      {
        boylansetTextColor('#EAFAF1')
        boylansetText("is LIT")
        boylanSetBackgroundColor('#1DE9B6')
      }
      if(boylanitsAight >= boylanitsLit && boylanitsAight >= boylanitsDead)
      {
        boylansetTextColor('#FEF9E7')
        boylansetText("is Aight")
        boylanSetBackgroundColor('#FFD600')
      }
      if(boylanitsDead >= boylanitsLit && boylanitsDead >= boylanitsAight)
      {
        boylansetTextColor('#F9EBEA')
        boylansetText("is dead")
        boylanSetBackgroundColor('#FF1744')
      }


      if(biltitsLit >= biltitsAight && biltitsLit >= biltitsDead)
      {
        biltSetTextColor('#EAFAF1')
        biltSetText("is LIT")
        biltSetBackgroundColor('#1DE9B6')
      }
      if(biltitsAight >= biltitsLit && biltitsAight >= biltitsDead)
      {
        biltSetTextColor('#FEF9E7')
        biltSetText("is Aight")
        biltSetBackgroundColor('#FFD600')
      }
      if(biltitsDead >= biltitsLit && biltitsDead >= biltitsAight)
      {
        biltSetTextColor('#F9EBEA')
        biltSetText("is dead")
        biltSetBackgroundColor('#FF1744')
      }


      if(coupesitsLit >= coupesitsAight && coupesitsLit >= coupesitsDead)
      {
        coupesSetTextColor('#EAFAF1')
        coupesSetText("is LIT")
        coupesSetBackgroundColor('#1DE9B6')
      }
      if(coupesitsAight >= coupesitsLit && coupesitsAight >= coupesitsDead)
      {
        coupesSetTextColor('#FEF9E7')
        coupesSetText("is Aight")
        coupesSetBackgroundColor('#FFD600')
      }
      if(coupesitsDead >= coupesitsLit && coupesitsDead >= coupesitsAight)
      {
        coupesSetTextColor('#F9EBEA')
        coupesSetText("is dead")
        coupesSetBackgroundColor('#FF1744')
      }
    

      if(holeitsLit >= holeitsAight && holeitsLit >= holeitsDead)
      {
        holeSetTextColor('#EAFAF1')
        holeSetText("is LIT")
        holeSetBackgroundColor('#1DE9B6')
      }
      if(holeitsAight >= holeitsLit && holeitsAight >= holeitsDead)
      {
        holeSetTextColor('#FEF9E7')
        holeSetText("is Aight")
        holeSetBackgroundColor('#FFD600')
      }
      if(holeitsDead >= holeitsLit && holeitsDead >= holeitsAight)
      {
        holeSetTextColor('#F9EBEA')
        holeSetText("is dead")
        holeSetBackgroundColor('#FF1744')
      }


      if(trinitsLit >= trinitsAight && trinitsLit >= trinitsDead)
      {
        trinSetTextColor('#EAFAF1')
        trinSetText("is LIT")
        trinSetBackgroundColor('#1DE9B6')
      }
      if(trinitsAight >= trinitsLit && trinitsAight >= trinitsDead)
      {
        trinSetTextColor('#FEF9E7')
        trinSetText("is Aight")
        trinSetBackgroundColor('#FFD600')
      }
      if(trinitsDead >= trinitsLit && trinitsDead >= trinitsAight)
      {
        trinSetTextColor('#F9EBEA')
        trinSetText("is dead")
        trinSetBackgroundColor('#FF1744')
      }


    
    
    }

      
    
  )

      return (
        <View style={styles.container}>
          <HomeHeader/>
          <View style={styles.homeheader2}>

            
            <View style={{flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center', 
    width: '90%',
    height: 100,
    //borderWidth: 1, 
    borderRadius: 10,
    borderColor: 'black',
    marginBottom: 20,
    backgroundColor: boylanBackgroundColor}}>
              <Text style={{color: boylanTextColor, fontSize: 20}}>
                Boylan {boylanText}
              </Text>
            </View>


            <View style={{flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center', 
    width: '90%',
    height: 100,
    borderRadius: 10,
    //borderWidth: 1, 
    borderColor: 'black',
    marginBottom: 20,
    backgroundColor: biltBackgroundColor}}>
              <Text style={{color: biltTextColor, fontSize: 20}}>
                Biltmore {biltText}
              </Text>
            </View>


            <View style={{flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center', 
    width: '90%',
    height: 100,
    //borderWidth: 1, 
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 20, 
    backgroundColor: coupesBackgroundColor}}>
              <Text style={{color: coupesTextColor, fontSize: 20}}>
                Coupes {coupesText}
              </Text>
            </View>


            <View style={{flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center', 
    width: '90%',
    height: 100,
    //borderWidth: 1, 
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 20, 
    backgroundColor: holeBackgroundColor}}>
              <Text style={{color: holeTextColor, fontSize: 20}}>
                Hole {holeText}
              </Text>
            </View>


            <View style={{flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center', 
    width: '90%',
    height: 100,
    //borderWidth: 1, 
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 20, 
    backgroundColor: trinBackgroundColor}}>
              <Text style={{color: trinTextColor, fontSize: 20}}>
                Trin {trinText}
              </Text>
            </View>
          </View>
        </View>
      )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  face: {
    alignItems: 'center',
    justifyContent: 'center', 
    width: 330,
    height: '100%',
    borderWidth: 1, 
    borderColor: 'black'
  },
  back: {
    alignItems: 'center',
    justifyContent: 'center', 
    width: 330,
    height: '100%',
    borderWidth: 1, 
    borderColor: 'black'
  },
  flipcontainer: {
    alignItems: 'center',
    justifyContent: 'center', 
    width: 330,
    height: 370,
    borderColor: 'red',
    //borderWidth: 1, 
    marginTop: 100
  },
  subcontainer: {
    alignItems: 'center',
    justifyContent: 'center', 
    width: 350,
    height: '70%',
    //borderWidth: 1, 
    borderColor: 'black',
    paddingBottom:150
  },
  homeheader: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between', 
    width: 350,
    height: '5%',
    //borderWidth: 1, 
    borderColor: 'black',
    marginTop: 50
  },
  homeheader2: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'flex-start', 
    width: '100%',
    height: 900,
    //borderWidth: 1, 
    borderColor: 'black',
    paddingTop: 30
  },
  homeheader3: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center', 
    width: '90%',
    height: 100,
    borderWidth: 1, 
    borderColor: 'black',
    marginBottom: 20
  }


});




 /*
          <MapView
              style={{ flex: 1, width: '100%', height: '100%'}}
              initialRegion={{
                latitude: 38.033554,
                longitude: -78.507980,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
              }} showsUserLocation={true}
            >
              <Marker coordinate={{ latitude: 38.0341,longitude: -78.4994 }} >
                <Text style={{color: 'red', fontSize: 10, fontFamily: 'Helvetica-Bold'}}>
                  Boylan
                </Text>
              </Marker>
              <Marker coordinate={{ latitude: 38.0363,longitude: -78.5006 }}>
                <Text style={{color: 'red', fontSize: 10, fontFamily: 'Helvetica-Bold'}}>
                  Bilt
                </Text>
              </Marker>
              <Marker coordinate={{ latitude: 38.03605,longitude: -78.50025 }} >
                <Text style={{color: 'red', fontSize: 10, fontFamily: 'Helvetica-Bold'}}>
                  The Hole
                </Text>
              </Marker>
              <Marker coordinate={{ latitude: 38.0360,longitude: -78.5003 }} >
                <Text style={{color: 'red', fontSize: 10, fontFamily: 'Helvetica-Bold'}}>
                  Coupe's
                </Text>
              </Marker>
              <Marker coordinate={{ latitude: 38.0349,longitude: -78.5003 }}>
                <Text style={{color: 'red', fontSize: 10, fontFamily: 'Helvetica-Bold'}}>
                  Trin
                </Text>
              </Marker>
            </MapView>
            */