import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation();

  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}