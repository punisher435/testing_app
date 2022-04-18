import { View, Text,StyleSheet  } from 'react-native'
import React from 'react'

import AppText from '../components/Text';
import Carousel from '../components/Carousel';
import { dummyData } from '../config/Data'
import Button from '../components/Button';

export default function Intro({navigation}) {


  const pressRegister = () => {
    navigation.navigate('Register');
}
const pressLogin = () => {
    navigation.navigate('Login');
}

const obj1={
  bgcolor:'dark',
  color:'white',
  x1:10,
  x2:10,
  x3:0,
  x4:0,
  width:110,
}
const obj2={
  width:110,
  bgcolor:'lightgrey',
  color:'dark',
  x1:0,
  x2:0,
  x3:10,
  x4:10,
}

  return (
    <View style={styles.container}>
    
    <Carousel data = {dummyData}/>
    <View style={styles.buttoncontainer}>
    <View style={styles.buttonview}>
            <Button title='Sign in' onPress={pressLogin} obj={obj1}/>
        </View>
    <View style={styles.buttonview}>
            <Button title='Register' onPress={pressRegister} obj={obj2}/>
        </View>
        </View> 
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'#fff',
   },
   buttonview:{
     
   },
   buttoncontainer:{
   marginBottom:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   },
  });
  