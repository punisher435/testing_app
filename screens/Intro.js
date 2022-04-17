import { View, Text,StyleSheet  } from 'react-native'
import React from 'react'

import AppText from '../components/Text';
import Carousel from '../components/Carousel';
import { dummyData } from '../config/Data'

export default function Intro() {
  return (
    <Carousel data = {dummyData}/>
  )
}

const styles = StyleSheet.create({
   container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
     backgroundColor:'#fff',
   }
  });
  