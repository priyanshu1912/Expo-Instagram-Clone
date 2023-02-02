import { Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import Header from '../../../components/notifications/Header'
import { Icon } from '@rneui/themed'

const Notifications = () => {
  return (
    <SafeAreaView className='flex-1'>
      <Header/>
      <View className='items-center justify-center flex-1'>
        <Icon type='ionicon' name='construct-outline' size={50} color='grey' />
        <Text className='text-gray-500'>This page is under construction</Text>
      </View>
    </SafeAreaView>
  )
}

export default Notifications