import * as React from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native'





export default class LoadingScreen extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3500,
      easing: Easing.linear,
    }).start();
  }

  render()
      {
        return (
          <View style={styles.container}>
            <View style={styles.subcontainer}>
              <View style={styles.image_container}>
              <LottieView source={require('../assets/bool.json')} progress={this.state.progress}/>
              <Text style={{fontSize:35, color: '#6600FF', borderColor: 'black',letterSpacing: 0, paddingTop: 145, fontFamily: 'Helvetica'}}>bool.</Text>
              </View>
            </View>
          </View>
        )
      }
}

/*
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    //borderWidth: 5, 
    //borderColor: 'black', 
    width: 300, 
    borderRadius: 1, 
  },
  image_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 220, 
    height: 200, 
    borderColor: 'white',
    borderWidth: 2.5, 
    backgroundColor: 'white', 
    paddingLeft: 5, 
    marginBottom: 80
  },
  subimagecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300, 
  },
});