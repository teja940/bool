import * as React from 'react';
import { Text, View, ImageBackground, Image, StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Boylan from './Boylan'
import Coupes from './Coupes'
import Trin from './Trin';
import Biltmore from './Biltmore'
import Hole from './Hole'
import { NavigationContainer } from '@react-navigation/native';



const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNav()
{
        return (
          <NavigationContainer>
            <Tab.Navigator initialRouteName="Boylan" inactiveColor='grey' activeColor='#6600FF' barStyle={{ backgroundColor: '#EDE7F6'}} shifting={false}>
                <Tab.Screen name="Boylan" component={Boylan} />
                <Tab.Screen name="Trin" component={Trin} />
                <Tab.Screen name="Coupes" component={Coupes} />
                <Tab.Screen name="Hole" component={Hole} />
                <Tab.Screen name="Biltmore" component={Biltmore} />
            </Tab.Navigator>
          </NavigationContainer>
        )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  subcontainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //borderWidth: 5, 
    //borderColor: 'black', 
    width: 300, 
    borderRadius: 100, 
  },
  image_container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: 110, 
    height: 90, 
    borderColor: '#EBF5FB',
    borderWidth: 2.5, 
    backgroundColor: '#EBF5FB', 
    paddingLeft: 5
  },
  subimagecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300, 
  },
});