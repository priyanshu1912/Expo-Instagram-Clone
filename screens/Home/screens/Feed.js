import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FeedPost from '../../../components/FeedPost'
import Header from '../../../components/Header'

const Feed = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Header/>
      <FeedPost/>
    </SafeAreaView>
  )
}

export default Feed