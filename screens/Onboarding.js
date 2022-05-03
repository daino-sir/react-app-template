import React from 'react';
import { Button, Text, ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform , View, Pressable} from 'react-native';
import { theme } from 'galio-framework';
import { AntDesign } from '@expo/vector-icons';


const { height, width } = Dimensions.get('screen');
import { Images, appTheme } from '../constants/';
import { HeaderHeight } from '../constants/utils';

export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
          <ImageBackground source={Images.Onboarding}
          style={styles.image}>
          <View
          style={{
                marginTop: 150,
                justifyContent: 'center',
                alignItems:'center',
                alignSelf:'center' ,
                height: 200,
                width: 200
                }}
          >
          <Image
            source={Images.Logo}
            resizeMode="cover"
            style={styles.logo}
            />
          </View>
          <View
          style={{
          flexDirection: 'column-reverse',
          height:'40%'
          }}
          >
          <Pressable
          onPress={() => navigation.navigate('App')}
          style={styles.button}
          >
          <Text
          style={styles.text}
          >
          Get Started
          </Text>
          <View
          style={{height: '100%', width: '16%',alignItems:'flex-end', flexDirection: 'column', justifyContent: 'center'}}
          >
          <AntDesign name="arrowright" size={18} color="#F8F8F8"style={{}} />
          </View>
          </Pressable>
          </View>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000c0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
  alignSelf:'center',
  width: '100%',
  height: '100%'
  },
  text: {
      color: '#F8F8F8',
      fontSize: 15,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  button: {
    flexDirection: 'row',
    width: 150,
    height: 40,
    backgroundColor: '#336DFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
 image: {
    flex: 1,
    justifyContent: 'center',
    alignSelf:'center',
    height: 700,
    width: 410
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66
  }
});
