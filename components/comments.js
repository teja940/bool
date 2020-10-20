import * as React from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, Image, Animated, TouchableOpacity} from 'react-native';
import FirstCarousel from './FirstCarousel'
import { Ionicons, Octicons, AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, Fontisto, Foundation, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import * as firebase from 'firebase'




export default function Comments()
{
    var [comm1, setComm] = useState('')

    React.useEffect(
        ()=>{commentsListener()}
      )

    function commentsListener()
    {
        firebase.database().ref('bars/comments/').on('value', (snapshot)=>{
        var highScore2 = snapshot.val().comments
        setComm(highScore2)
        })
    }

      return (
        <View style={styles.container}>
          <View style={styles.homeheader}>
              <ScrollView style={{width: 100, height: 100, borderColor: 'black', borderWidth: 1}}>
              <Text style={{fontSize:30, color: '#6600FF', borderColor: 'black',letterSpacing: 0}}>
                  {comm1}
              </Text>
              </ScrollView>
          </View>
        </View>
      )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    height: '100%',
    //borderWidth: 1, 
    borderColor: 'black',
    marginBottom: 130
  }

});