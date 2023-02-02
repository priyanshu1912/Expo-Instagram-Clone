import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Landing = ({navigation}) => {
  return (
    <SafeAreaView className='flex-1 bg-white justify-center'>
        <View className='px-5'>
            <View className='items-center mb-5'>
            <Image 
            style={{width:200, height:100, resizeMode:'contain'}} 
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png'}}/>
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Register')}
            className='bg-blue-500 py-3 rounded-md'>
                <Text className='text-center text-white'>Create new account</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Login')}
             className='mt-3'>
                <Text className='font-semibold text-center text-blue-500'>Log in</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Landing