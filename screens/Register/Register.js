import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const Register = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text className='text-center'>This is Register Page</Text>
      <Button title='Go to Login' onPress={()=>navigation.navigate('Login')} />
    </SafeAreaView>
  )
}

export default Register