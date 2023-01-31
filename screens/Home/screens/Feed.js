import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Icon} from '@rneui/themed'

const Feed = ({navigation}) => {
  return (
    <SafeAreaView>
      <View className='px-3'>
      <View className='flex flex-row items-center justify-between'>
        <TouchableOpacity onPress={()=>navigation.navigate('Register')} >
          <Image style={{width:150, height:80, resizeMode:'contain'}} source={{uri:'https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png'}}/>
        </TouchableOpacity>
        <View className='flex flex-row items-center gap-3'>
          <TouchableOpacity onPress={()=>navigation.navigate('CameraScreen')}>
          <Icon type='feather' name='plus-square' />
          </TouchableOpacity>
          <Icon type='feather' name='send' />
        </View>
      </View>

      </View>
    </SafeAreaView>
  )
}

export default Feed