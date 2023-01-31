import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import {Camera, CameraType} from 'expo-camera'
import * as ImagePicker from 'expo-image-picker';
import {Icon} from '@rneui/themed'

const CameraComponent = ({navigation}) => {
  const cameraRef = useRef()
  const [type,setType] = useState(CameraType.back)
  const [cameraPermissions, setCameraPermissions] = Camera.useCameraPermissions()
  const [photo,setPhoto] = useState()

  const flipCamera = () => {
    setType(prev => prev===CameraType.back ? CameraType.front : CameraType.back)
  }

  const takePicture = async () => {
    if(cameraRef){
      const response = await cameraRef.current.takePictureAsync()
      setPhoto(response.uri)
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri)
      //setImage(result.assets[0].uri);
    }
  }

  return (
    <Camera ref={cameraRef} style={{flex:1, justifyContent:'center'}} type={type}>
      <SafeAreaView style={{
        width:'100%',
        position:'absolute',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        bottom: 0
      }} >
          <TouchableOpacity onPress={pickImage}>
            <Icon type='ionicon' name='image-outline' color='white' size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
            <Icon type='ionicon' name='ellipse' color='white' size={80} />
          </TouchableOpacity>
          <TouchableOpacity onPress={flipCamera}>
            <Icon type='ionicon' name='camera-reverse-outline' color='white' size={30} />
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={{
        width:'100%',
        position:'absolute',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        top: 0
      }} >
          <TouchableOpacity onPress={()=>navigation.navigate('Feed')}>
            <Icon type='ionicon' name='close-outline' color='white' size={30} />
          </TouchableOpacity>
        </SafeAreaView>
    </Camera>
  )
}

export default CameraComponent