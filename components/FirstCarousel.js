import React from 'react';
import { StyleSheet,Text, Image, View,SafeAreaView, ImageBackground} from 'react-native';
import FlipCard from 'react-native-flip-card'
import Carousel from 'react-native-snap-carousel';
export default class App extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
            carouselItems: [
            {
                title:"Boylan Heights", 
                image: require('../assets/boylanHeights.png')
            },
            {
                title:"Coupes", 
                image: require('../assets/coupes.png')
            },
            {
                title:"Trin", 
                image: require('../assets/trin.png')
            },
            {
                title:"Bilt",
                image: require('../assets/bilt.png')
            },
            {
                title:"The Hole",
                image: require('../assets/theREALpigeonhole.png')
            }
        ]}
    }

    _renderItem({item,index}){
        return (
          <View style={styles.container}>
            <View style={styles.flipcontainer}>
          <FlipCard flipHorizontal={true} flipVertical={false}>
          {/* Face Side */}
          <View style={styles.face}>
            <ImageBackground source={item.image} style={{width: '100%', height: '100%', resizeMode: 'contain'}}/>
          </View>
          {/* Back Side */}
          <View style={styles.back}>
            <Text>{item.title}</Text>
          </View>
        </FlipCard>
        </View>
        </View>
        )
    }

    render() {
        return (
        <SafeAreaView style={styles.container}>
            <Carousel
                    layout={'tinder'}
                    layoutCardOffset={18}
                    data={this.state.carouselItems}
                    sliderWidth={350}
                    itemWidth={300}
                    renderItem={this._renderItem}
                />
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  face: {
    alignItems: 'center',
    justifyContent: 'center', 
    width: 330,
    height: '100%',
    //borderWidth: 1, 
    borderColor: 'black',
    backgroundColor: 'transparent', 
  },
  back: {
    alignItems: 'center',
    justifyContent: 'center', 
    width: 330,
    height: '100%',
    borderWidth: 1, 
    borderColor: 'white',
    backgroundColor: 'white'
  },
  flipcontainer: {
    alignItems: 'center',
    justifyContent: 'center', 
    width: 330,
    height: 450,
    borderColor: 'red',
    //borderWidth: 1, 
    marginTop: 100
  }
});
