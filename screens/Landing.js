import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  ScrollView,
  Pressable
} from 'react-native';

import { Button, Icon, Input } from '../components';
import { Images, appTheme } from '../constants';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);



class Landing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={{width: '100%'}}>
       <View style={{ justifyContent: 'center', alignItems:'center', alignSelf:'center', height: 70, width: 70 }}>
       <Image
        source={Images.Logo}
        resizeMode="cover"
        style={styles.logo}
        />
        </View>
        <View style={{ marginTop: 40, justifyContent: 'center', alignItems:'center', alignSelf:'center', height: 150, width: 150 }}>
       <Image
               source={Images.RegIllustration}
               resizeMode="cover"
               style={styles.logo}
               />
        </View>
        <View style={{ justifyContent: 'space-evenly', alignItems:'center', alignSelf:'center', height: 180, width: 350 }}>
        <Text style={styles.heading}>Enter registered Phone number</Text>
        <Text style={styles.text}>We will send you a One Time Pin. use it to verify your phone number</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems:'center', alignSelf:'center', height: 150, width: 180 }}>
        <TextInput style={styles.input}/>
        </View>
        <View style={{ flexDirection: 'column-reverse' }}>
                <Pressable
                          onPress={() => navigation.navigate('App')}
                          style={styles.button}
                          >
                          <Text
                          style={styles.buttonText}
                          >
                          Get OTP
                          </Text>
                          </Pressable>
                </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
button: {
    width: 150,
    height: 40,
    backgroundColor: '#336DFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  heading:{
    color:'#323492',
     textAlign: 'center',
     fontSize: 20
  },
  text:{
     textAlign: 'center',
     color:'#ADADAD'
  },
  buttonText:{
    color: '#F8F8F8',
    fontSize: 15,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container:{
     flex: 1,
     flexDirection: 'column',
     alignItems: 'center'
  },
  input:{
     width: 280,
     borderColor: '#ADADAD',
     height: 70,
     borderWidth: 2,
     borderRadius: 25
  },
  logo:{
    alignSelf:'center',
    width: '100%',
    height: '100%'
    },
});

export default Landing;
