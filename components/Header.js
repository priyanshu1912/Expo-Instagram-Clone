import { View, Image, TouchableOpacity ,Text} from 'react-native'
import React from 'react'
import {Icon} from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation()
  return (
    <View className='px-3 flex flex-row items-center justify-between'>
        <TouchableOpacity onPress={()=>navigation.navigate('Landing')} >
            <Image style={{width:130, height:80, resizeMode:'contain'}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png'}}/>
        </TouchableOpacity>
        <View className='flex flex-row items-center gap-5'>
            <TouchableOpacity onPress={()=>navigation.navigate('CameraScreen')}>
                <Icon type='feather' name='plus-square' />
            </TouchableOpacity>
            <TouchableOpacity className='relative'>
                <View className='absolute w-5 h-5 bg-red-500 rounded-full items-center justify-center -top-2 -right-1 z-50'>
                    <Text className='text-white font-semibold text-xs'>11</Text>
                </View>
                <Icon type='feather' name='send' />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header