import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import Stories from './Stories'

const data = [
    {
        user: 'priyanshu1912',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        post: 'https://images.pexels.com/photos/715134/pexels-photo-715134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        likes_count: 10,
        comments: [],
        caption: 'Life is awesome, cheers!!'
    },
    {
        user: 'priyanshu1912',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        post: 'https://images.pexels.com/photos/707667/pexels-photo-707667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        likes_count: 10,
        comments: [],
        caption: 'Life is awesome, cheers!!'
    },
]

const FeedPost = () => {
  return (
    <FlatList
    className='mb-3'
    ListHeaderComponent={<Stories/>}
    showsVerticalScrollIndicator={false}
    data={data}
    ItemSeparatorComponent={()=> <View className='h-5'></View>}
    renderItem={({item}) => (
        <View>
            <View className='px-3 py-2 flex-row items-center justify-between'>
                <TouchableOpacity className='flex-row gap-2 items-center'>
                    <Image className='w-8 h-8 rounded-full object-contain' source={{uri:item.image}} />
                    <Text className='font-medium'>{item.user}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon type='feather' name='more-horizontal' size={25} />
                </TouchableOpacity>
            </View>
            <Image style={{aspectRatio:1/1}} source={{uri:item.post}} />
            <View className='px-3'>
                <View className='flex-row items-center justify-between py-3'>
                    <View className='flex-row items-center gap-4'>
                        <TouchableOpacity>
                            <Icon type='feather' name='heart' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon type='feather' name='message-circle' size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon type='feather' name='send' size={25} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Icon type='feather' name='bookmark' size={25} />
                    </TouchableOpacity>
                </View>
                <Text>{item.likes_count} likes</Text>
                <View className='flex-row gap-1'>
                    <Text className='font-semibold'>{item.user}</Text>
                    <Text>{item.caption}</Text>
                </View>
                <TouchableOpacity>
                    <Text>View all 4 comments</Text>
                </TouchableOpacity>
                <View className='flex-row justify-between items-center my-2'>
                    <View className='flex-row items-center gap-2'>
                        <Image className='w-7 h-7 rounded-full object-contain' source={{uri:item.image}} />
                        <TextInput placeholder='Add a comment...' />
                    </View>
                    <View></View>
                </View>
                <Text>28 minutes ago</Text>
            </View>
        </View>
    )} />
  )
}

export default FeedPost