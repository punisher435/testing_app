import React from 'react'
import {  StyleSheet, Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Intro from './Intro';
import Register from './Register';
import Login from './Login';



const WelcomeStack = createStackNavigator();




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
