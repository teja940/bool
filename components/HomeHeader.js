import * as React from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, Image, Animated, TouchableOpacity} from 'react-native';
import FirstCarousel from './FirstCarousel'
import { Ionicons, Octicons, AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, Fontisto, Foundation, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import MapView, { Marker } from "react-native-maps";
import firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler';
import {navigation} from 'react-navigation'




export default class HomeHeader extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {
      return (
          <View style={styles.homeheader}>
              <Text style={{fontSize:30, color: '#6600FF', borderColor: 'black',letterSpacing: 0}}>
                bool
              </Text>
          </View>
        )
    }
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
    justifyContent: 'center', 
    width: 350,
    height: '5%',
    //borderWidth: 1, 
    borderColor: 'black',
    marginTop: 50
  },
  homeheader2: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center', 
    width: '100%',
    height: 900,
    //borderWidth: 1, 
    borderColor: 'black',
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