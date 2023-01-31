import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Icon} from '@rneui/themed'

const Feed = ({navigation}) => {
  return (
    <SafeAreaView>
      <View className='px-3'>

      <View className='flex flex-row items-center justify-between'>
        <Image style={{width:150, height:80, resizeMode:'contain'}} source={{uri:'https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-2010-2013.png'}}/>
        <View className='flex flex-row items-center gap-3'>
          <TouchableOpacity onPress={()=>navigation.navigate('AddPost')}>
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