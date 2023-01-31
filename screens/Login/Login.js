import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text className='text-center'>This is Login page</Text>
      <Button title='Enter App' onPress={()=>navigation.navigate('Main')} />
    </SafeAreaView>
  )
}

export default Login