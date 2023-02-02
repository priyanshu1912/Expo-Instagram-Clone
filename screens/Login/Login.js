import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed'
import {useDispatch} from 'react-redux'
import { loginUser } from '../../redux/slices/AuthSlice'

const Login = ({navigation}) => {
  const dispatch = useDispatch()
  const [userDetails,setUserDetails] = useState({
    email:'',
    password:''
  })

  const handleSubmit = () => {
    dispatch(loginUser(userDetails))
    .unwrap()
    .then(()=>navigation.navigate('Main'))
  }

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 justify-center relative'>
        <View className='items-center mb-5'>
          <Image style={{width:200, height:100, resizeMode:'contain'}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png'}}/>
        </View>
        <View className='gap-4 px-5'>
          <TextInput 
          value={userDetails.email}
          onChangeText={text => setUserDetails({...userDetails, email:text})}
          placeholder='Phone number, username or email address'
          className='border border-gray-300 p-3 rounded-md' />
          <View>
          <TextInput 
          value={userDetails.password}
          onChangeText={text => setUserDetails({...userDetails, password:text})}
          placeholder='Password'
          className='border border-gray-300 p-3 rounded-md' />
          <TouchableOpacity>
            <Text className='my-3 text-right font-semibold text-blue-500'>Forgotten password?</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleSubmit} 
          className='bg-blue-500 py-3 rounded-md'>
            <Text className='text-white text-center'>Log in</Text>
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center gap-5 my-5 px-5'>
          <View className='grow border border-gray-100 h-0.5'></View>
          <Text>OR</Text>
          <View className='grow border border-gray-100 h-0.5'></View>
        </View>
        <View className='flex-row items-center justify-center gap-2'>
          <Icon type='ionicon' name='logo-facebook' color='#1e88e5' />
          <Text className='text-blue-500 font-semibold'>Log in with Facebook</Text>
        </View>

        <View className='absolute bottom-0 border-t border-gray-200 flex-row gap-1 w-full justify-center py-3'>
          <Text className='text-gray-500 font-medium'>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
            <Text className='text-blue-500 font-medium'>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login