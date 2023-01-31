import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './components/Feed'
import Profile from './components/Profile'
import Reels from './components/Reels';
import Search from './components/Search';
import Notifications from './components/Notifications';
import { Icon } from '@rneui/themed';
import { Text } from 'react-native';

const Main = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={({route}) => (
        {
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor:'black',
            tabBarInactiveTintColor:'gray',
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name==='Feed'){
                    iconName = focused ? 'home' : 'home'
                }else if(route.name === 'Search'){
                    iconName = focused ? 'search' : 'search'
                }else if(route.name === 'Reels'){
                    iconName = focused ? 'film' : 'film'
                }else if(route.name === 'Notifications') {
                    iconName = focused ? 'heart' : 'heart'
                }else if(route.name === 'Profile') {
                    iconName = focused ? 'user' : 'user'
                }
                return <Icon type='feather' name={iconName} color={color} size={size} />
            },
        }
    )}>
        <Tab.Screen name='Feed' component={Feed} />
        <Tab.Screen name='Search' component={Search} />
        <Tab.Screen name='Reels' component={Reels} />
        <Tab.Screen name='Notifications' component={Notifications} />
        <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default Main