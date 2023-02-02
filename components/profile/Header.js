import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'

const Header = () => {
  return (
    <View className='flex-row justify-between items-center px-4 py-3'>
      <View className='flex-row items-center gap-1'>
        <Icon type='feather' name='lock' />
        <Text className='font-bold text-xl'>priyanshu1912</Text>
      </View>
      <View className='flex-row gap-4'>
        <TouchableOpacity>
            <Icon type='feather' name='plus-square' />
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon type='feather' name='menu' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header