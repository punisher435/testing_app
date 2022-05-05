import React from 'react'
import { Text, StyleSheet, Dimensions, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Intro from './Intro';
import Register from './Register';
import Login from './Login';
import colors from '../config/colors';



const WelcomeStack = createStackNavigator();

const { width, heigth } = Dimensions.get('window')



function NavigationTab() {
  return (

    <NavigationContainer style={styles.screen} >

      <WelcomeStack.Navigator initialRouteName="Intro" screenOptions={{
        headerShown: false,
      }} >
        <WelcomeStack.Screen name="Intro" component={Intro} />
        <WelcomeStack.Screen name="Register" component={Register} />
        <WelcomeStack.Screen name="Login" component={Login} />
      </WelcomeStack.Navigator>

    </NavigationContainer>


  )
}



export default NavigationTab

const styles = StyleSheet.create({
  screen: {



  },
  container: {
    flex: 1,
  }
})
