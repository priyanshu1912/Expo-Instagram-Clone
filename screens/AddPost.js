import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { postImage } from '../redux/slices/AuthSlice'

const AddPost = ({navigation, route}) => {
    const dispatch = useDispatch()
    const {imageUrl} = route.params
    const [caption,setCaption] = useState('')

    const handleShare = () => {
        dispatch(postImage({imageUrl,caption}))
        navigation.navigate('Main')
    }

  return (
    <SafeAreaView>
      <View className='flex-row justify-between items-center w-full px-5'>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
            <Icon type='feather' name='arrow-left' />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
            <Text className='text-blue-500 font-medium'>Share</Text>
        </TouchableOpacity>
      </View>
      <View className='px-5 mt-8'>
        <Image style={{ aspectRatio:1/1, borderRadius:'10px'}} source={{uri: imageUrl}} />
        <TextInput 
        value={caption}
        onChangeText={text => setCaption(text)}
        placeholder='Write a caption'
        multiline={true}
        numberOfLines={3}
        className='border border-gray-200 mt-5 rounded-md p-5' />
      </View>
    </SafeAreaView>
  )
}

export default AddPost