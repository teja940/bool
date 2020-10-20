import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from '../boolUVA/components/LoadingScreen';
import HomeScreen from '../boolUVA/components/HomeScreen';
import ActHomeScreen from '../boolUVA/components/ACTUALHomeScreen'
import * as SecureStore from 'expo-secure-store';
import * as firebaseApp from 'firebase';
import * as Font from 'expo-font'
//import * as firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomTabNav from './components/BottomTabNav'
import { AsyncStorage } from 'react-native';


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
if (firebaseApp.apps.length == 0) {
  firebaseApp.initializeApp(firebaseConfig);
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, USER: ''};
  }

  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.checkForUSERNAME();
    }, 3500);
    this.checkForFirebaseCredential();
    // Listen for authentication state to change.
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user != null) {
        console.log('We are authenticated now!');
        Alert.alert('We authneticated with Firebase!', `Hi ${user}`);
      }
    });
  }

  //Check Async Storage if token is available
  //If it is available set loading state to false
  async checkForUSERNAME() {
    let token = await AsyncStorage.getItem('USERNAME');
    await AsyncStorage.removeItem('USERNAME')
    this.setState({
      USER: token,
      loading: false,
    });
  }

  async checkForFirebaseCredential() {
    let credential = await AsyncStorage.getItem('firebaseCredential');
    if (credential) {
      firebaseApp
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          console.log('Auth failed and here the error' + JSON.stringify(error));
        });
    }
  }

  //Write token to secure storage and firebase credital.
  async saveTokensToSecureStorage(user, credential) {
    AsyncStorage.setItem('USERNAME', user);
    //Save Firebase credential
    AsyncStorage.setItem('firebaseCredential', credential);
    this.setState({
      USER: user,
    });
  }

  render() {
    //let username = SecureStore.getItemAsync('USERNAME')
    if (this.state.loading === true) {
      return <LoadingScreen/>;
    } else if (this.state.USER === null) {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.logIn()}>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderColor: '#6600FF', borderWidth: 3, height: 50, width: 175, paddingLeft: 5, paddingRight: 5, borderRadius: 10}}>
              <Text style={{color: '#6600FF', fontSize: 17, fontFamily: 'Helvetica'}}>
                Log In
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderColor: '#6600FF', height: 30, width: 300, paddingLeft: 5, paddingRight: 5, borderRadius: 10, marginTop:5}}>
              <Text style={{color: '#6600FF', fontSize: 10, fontFamily: 'HelveticaNeue-Italic'}}>
                *This login button will create a one-time random username to keep track of you're votes.
              </Text>
          </View>
        </View>
      );
    } else {
      return <BottomTabNav/>;
    }
  }
// <Button title="LogIn With Facebook" onPress={() => this.logIn()} />
  async logIn() {
    let randString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    AsyncStorage.setItem('USERNAME', randString)
    this.setState({USER:randString})
    firebaseApp.database().ref('users/'+randString).set({
      boylanRatingLimit: 0, 
      biltRatingLimit: 0, 
      coupesRatingLimit: 0, 
      holeRatingLimit: 0, 
      trinRatingLimit: 0
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});
//after authentication, make sure to go to your firebase application and change the rules where it says "read" from "false" to "auth != null"

/*
try {
      //Seed documentation on course site at mobileappdev.teachable.com
      //For default user names and passwords.
      await Facebook.initializeAsync('295621928133332');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync(
        {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        let tokenfetch = await fetch(
          `https://graph.facebook.com/me?fields=name&access_token=${token}`
        )
        let jsoned = await tokenfetch.json()
        this.setState({response: jsoned.name})
        SecureStore.setItemAsync('USERNAME', this.state.response)
        firebaseApp.database().ref('users/'+this.state.response).set({
          boylanRatingLimit: 0, 
          biltRatingLimit: 0, 
          coupesRatingLimit: 0, 
          holeRatingLimit: 0, 
          trinRatingLimit: 0
        })
        //alert(this.state.response)
        let credential = firebaseApp.auth.FacebookAuthProvider.credential(
          token
        );
        firebaseApp
          .auth()
          .signInWithCredential(credential)
          .catch(error => {
            console.log(
              'Auth failed and here is the error ' + JSON.stringify(error)
            );
          });
        this.saveTokenToSecureStorage(token, credential);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
*/







//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




//1.0.0
/*import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from '../boolUVA/components/LoadingScreen';
import HomeScreen from '../boolUVA/components/HomeScreen';
import ActHomeScreen from '../boolUVA/components/ACTUALHomeScreen'
import * as SecureStore from 'expo-secure-store';
import * as firebaseApp from 'firebase';
import * as Font from 'expo-font'
//import * as firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';

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
if (firebaseApp.apps.length == 0) {
  firebaseApp.initializeApp(firebaseConfig);
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, token: null, response: ''};
  }

  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.checkForToken();
    }, 3500);
    this.checkForFirebaseCredential();
    // Listen for authentication state to change.
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user != null) {
        console.log('We are authenticated now!');
        Alert.alert('We authneticated with Firebase!', `Hi ${user}`);
      }
    });
  }

  //Check Async Storage if token is available
  //If it is available set loading state to false
  async checkForToken() {
    let token = await SecureStore.getItemAsync('token');
    //await SecureStore.deleteItemAsync('token')
    this.setState({
      token: token,
      loading: false,
    });
  }

  async checkForFirebaseCredential() {
    let credential = await SecureStore.getItemAsync('firebaseCredential');
    if (credential) {
      firebaseApp
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          console.log('Auth failed and here the error' + JSON.stringify(error));
        });
    }
  }

  //Write token to secure storage and firebase credital.
  async saveTokenToSecureStorage(token, credential) {
    SecureStore.setItemAsync('token', token);
    //Save Firebase credential
    SecureStore.setItemAsync('firebaseCredential', credential);
    this.setState({
      token: token,
    });
  }

  render() {
    if (this.state.loading === true) {
      return <LoadingScreen/>;
    } else if (this.state.token === null) {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.logIn()}>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderColor: '#6600FF', borderWidth: 3, height: 50, width: 175, paddingLeft: 5, paddingRight: 5, borderRadius: 10}}>
              <Text style={{color: '#6600FF', fontSize: 15, fontFamily: 'Helvetica'}}>
                Log in with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <ActHomeScreen/>;
    }
  }
// <Button title="LogIn With Facebook" onPress={() => this.logIn()} />
  async logIn() {
    try {
      //Seed documentation on course site at mobileappdev.teachable.com
      //For default user names and passwords.
      await Facebook.initializeAsync('295621928133332');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync(
        {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        let tokenfetch = await fetch(
          `https://graph.facebook.com/me?fields=name&access_token=${token}`
        )
        let jsoned = await tokenfetch.json()
        this.setState({response: jsoned.name})
        SecureStore.setItemAsync('USERNAME', this.state.response)
        firebaseApp.database().ref('users/'+this.state.response).set({
          boylanRatingLimit: 0, 
          biltRatingLimit: 0, 
          coupesRatingLimit: 0, 
          holeRatingLimit: 0, 
          trinRatingLimit: 0
        })
        //alert(this.state.response)
        let credential = firebaseApp.auth.FacebookAuthProvider.credential(
          token
        );
        firebaseApp
          .auth()
          .signInWithCredential(credential)
          .catch(error => {
            console.log(
              'Auth failed and here is the error ' + JSON.stringify(error)
            );
          });
        this.saveTokenToSecureStorage(token, credential);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});
//after authentication, make sure to go to your firebase application and change the rules where it says "read" from "false" to "auth != null"

*/









//1.0.2
/*
import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from '../boolUVA/components/LoadingScreen';
import HomeScreen from '../boolUVA/components/HomeScreen';
import ActHomeScreen from '../boolUVA/components/ACTUALHomeScreen'
import * as SecureStore from 'expo-secure-store';
import * as firebaseApp from 'firebase';
import * as Font from 'expo-font'
//import * as firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';

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
if (firebaseApp.apps.length == 0) {
  firebaseApp.initializeApp(firebaseConfig);
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, USER: ''};
  }

  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.checkForUSERNAME();
    }, 3500);
    this.checkForFirebaseCredential();
    // Listen for authentication state to change.
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user != null) {
        console.log('We are authenticated now!');
        Alert.alert('We authneticated with Firebase!', `Hi ${user}`);
      }
    });
  }

  //Check Async Storage if token is available
  //If it is available set loading state to false
  async checkForUSERNAME() {
    let token = await SecureStore.getItemAsync('USERNAME');
    //await SecureStore.deleteItemAsync('USERNAME')
    this.setState({
      USER: token,
      loading: false,
    });
  }

  async checkForFirebaseCredential() {
    let credential = await SecureStore.getItemAsync('firebaseCredential');
    if (credential) {
      firebaseApp
        .auth()
        .signInWithCredential(credential)
        .catch(error => {
          console.log('Auth failed and here the error' + JSON.stringify(error));
        });
    }
  }

  //Write token to secure storage and firebase credital.
  async saveTokensToSecureStorage(user, credential) {
    SecureStore.setItemAsync('USERNAME', user);
    //Save Firebase credential
    SecureStore.setItemAsync('firebaseCredential', credential);
    this.setState({
      USER: user,
    });
  }

  render() {
    //let username = SecureStore.getItemAsync('USERNAME')
    if (this.state.loading === true) {
      return <LoadingScreen/>;
    } else if (this.state.USER === null) {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.logIn()}>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderColor: '#6600FF', borderWidth: 3, height: 50, width: 175, paddingLeft: 5, paddingRight: 5, borderRadius: 10}}>
              <Text style={{color: '#6600FF', fontSize: 17, fontFamily: 'Helvetica'}}>
                Log In
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderColor: '#6600FF', height: 30, width: 300, paddingLeft: 5, paddingRight: 5, borderRadius: 10, marginTop:5}}>
              <Text style={{color: '#6600FF', fontSize: 10, fontFamily: 'HelveticaNeue-Italic'}}>
                *This login button will create a one-time random username to keep track of you're votes.
              </Text>
          </View>
        </View>
      );
    } else {
      return <ActHomeScreen/>;
    }
  }
// <Button title="LogIn With Facebook" onPress={() => this.logIn()} />
  async logIn() {
    let randString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    SecureStore.setItemAsync('USERNAME', randString)
    this.setState({USER:randString})
    firebaseApp.database().ref('users/'+randString).set({
      boylanRatingLimit: 0, 
      biltRatingLimit: 0, 
      coupesRatingLimit: 0, 
      holeRatingLimit: 0, 
      trinRatingLimit: 0
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});
//after authentication, make sure to go to your firebase application and change the rules where it says "read" from "false" to "auth != null"
*/