import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/HomeScreen'
import ProfileScreen from './Boylan'
import BottomTabNav from '../components/BottomTabNav'
import Trin from './Trin'
import Coupes from '../components/Coupes'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';
import Comments from './comments'


const Drawer = createDrawerNavigator();

export default function ACTUALHomeScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContentOptions={{
      activeBackgroundColor: '#EDE7F6',
      labelStyle: {color: '#6600FF'}
    }}>
        <Drawer.Screen name="Summary" component={HomeScreen}/>
        <Drawer.Screen name="How's the Party?" component={BottomTabNav} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}