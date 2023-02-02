import { SafeAreaView, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { registerUser } from '../../redux/slices/AuthSlice'

const Register = ({navigation}) => {
  const dispatch = useDispatch()
  const [userDetails,setUserDetails] = useState({
    email:'',
    password:''
  })

  const handleSubmit = () => {
    dispatch(registerUser(userDetails)).unwrap().then(()=>navigation.navigate('Main'))
  }

  return (
    <SafeAreaView className='flex-1 justify-center'>
      <View className='px-5'>
        <View className='items-center mb-5'>
            <Image style={{width:200, height:100, resizeMode:'contain'}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png'}}/>
        </View>
        <View className='gap-4'>
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
            </View>
            <TouchableOpacity onPress={handleSubmit} 
            className='bg-blue-500 py-3 rounded-md'>
              <Text className='text-white text-center'>Create account</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Register