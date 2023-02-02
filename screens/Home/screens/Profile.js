import { Text, SafeAreaView, View, TouchableOpacity, Image,Animated, FlatList,useWindowDimensions } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useSelector } from 'react-redux'
import Header from '../../../components/profile/Header'
import { TabView, SceneMap } from 'react-native-tab-view';

const data = [
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
  'https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg',
  'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
  'https://images.pexels.com/photos/4318822/pexels-photo-4318822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
]

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081',height:80 }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7',height:80 }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Profile = () => {
  const {user} = useSelector(state => state.user)
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', icon: 'grid' },
    { key: 'second', icon: 'bookmark' },
  ]);

  const renderTabBar = (props) => {
    return (
      <View className='flex-row justify-evenly'>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity className='text-center'
              onPress={() => setIndex(i)}>
              <Icon color={props.navigationState.index === i ? 'black' : 'lightgray'} type='feather' name={route.icon} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }


  return (
    <SafeAreaView className='flex-1'>
      <Header/>
    <FlatList
    ListHeaderComponent={
    <>
      {/* profile section */}
      <View className='px-4 mb-10'>
        <View className='flex-row items-center justify-between'>
          <Image className='w-24 h-24 rounded-full object-contain bg-gray-200' 
          source={{uri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}/>
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
              <Text className='font-bold'>76</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>
        <Text className='font-semibold mt-3 mb-3'>JOHN DOE</Text>
        <View className='flex-row gap-3'>
          <TouchableOpacity className='grow bg-gray-100 p-2 rounded-md items-center justify-center'>
            <Text>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className='grow bg-gray-100 p-2 rounded-md items-center justify-center'>
            <Text>Share profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-gray-100 p-2 rounded-md'>
            <Icon type='feather' name='user-plus' size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* tab icons */}
      {/* <View className='flex-row justify-evenly my-5'>
        <TouchableOpacity>
          <Icon type='feather' name='grid'/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon type='feather' name='bookmark'/>
        </TouchableOpacity>
      </View> */}
    </>
    }
      data={data}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      renderItem={({item}) => (
        <TouchableOpacity className='w-1/3'>
          <Image style={{aspectRatio:1}} source={{uri: item}} />
        </TouchableOpacity>
    )} 
    // ListFooterComponent={
    //   <TabView
    //   navigationState={{ index, routes }}
    //   renderScene={renderScene}
    //   onIndexChange={setIndex}
    //   initialLayout={{ width: layout.width }}
    //   renderTabBar={renderTabBar}
    // />
    // }
    />

    </SafeAreaView>
  )
}

export default Profile