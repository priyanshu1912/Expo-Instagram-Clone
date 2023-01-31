import { Text, SafeAreaView, View, Button, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'

const data = [
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
  'https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg',
  'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'
]

const Profile = () => {
  return (
    <SafeAreaView>
      <View className='px-5'>
        <View className='flex-row items-center justify-between'>
          <View className='w-28 h-28 rounded-full bg-gray-200'></View>
          <View className='flex-row gap-5'>
            <View className='items-center'>
              <Text className='font-bold'>2</Text>
              <Text>Posts</Text>
            </View>
            <View className='items-center'>
              <Text className='font-bold'>190</Text>
              <Text>Followers</Text>
            </View>
            <View className='items-center'>
              <Text className='font-bold'>50</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>
        <Text className='font-semibold mt-5 mb-3'>DEV BHARDWAJ</Text>
        <View className='flex-row gap-3'>
        <TouchableOpacity className='grow bg-gray-200 p-2 rounded-md items-center justify-center'>
              <Text>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity className='grow bg-gray-200 p-2 rounded-md items-center justify-center'>
              <Text>Share profile</Text>
            </TouchableOpacity>
          <TouchableOpacity className='bg-gray-200 p-2 rounded-md'>
            <Icon type='feather' name='user-plus' size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View className='flex-row justify-evenly my-5'>
        <TouchableOpacity>
          <Icon type='ionicon' name='grid-outline'/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon type='ionicon' name='bookmark-outline'/>
        </TouchableOpacity>
      </View>
      <FlatList
      numColumns={3} 
      data={data}
      renderItem={({item}) => (
        <TouchableOpacity>
          <Image style={{aspectRatio:1,width:100}} source={{uri: item}} />
        </TouchableOpacity>
      )} />
    </SafeAreaView>
  )
}

export default Profile