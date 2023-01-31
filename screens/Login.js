import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <Button title='Login' onPress={()=>navigation.navigate('Main')} />
    </SafeAreaView>
  )
}

export default Login