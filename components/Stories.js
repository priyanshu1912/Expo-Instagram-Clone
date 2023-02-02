import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const data = [
  {
    username: 'priyanshu',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    username: 'dev',
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    username: 'priyanshu',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    username: 'dev',
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    username: 'priyanshu',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    username: 'dev',
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    username: 'priyanshu',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    username: 'dev',
    image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

const Stories = () => {
  return (
    <FlatList 
    className='px-3 pb-5'
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    ItemSeparatorComponent={()=>(<View className='w-2'></View>)}
    data={data}
    renderItem={({item}) => (
      <View>
        <TouchableOpacity className='border-2 border-gray-200 rounded-full p-0.5'>
          <Image className='w-16 h-16 object-contain rounded-full' source={{uri:item.image}} />
        </TouchableOpacity>
        <Text className='mt-0.5'>{item.username}</Text>
      </View>
    )}
     />
  )
}

export default Stories