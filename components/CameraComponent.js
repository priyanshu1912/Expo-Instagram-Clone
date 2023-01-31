import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import {Camera, CameraType} from 'expo-camera'
import * as ImagePicker from 'expo-image-picker';
import {Icon} from '@rneui/themed'

const CameraComponent = () => {
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
      <View>
        <TouchableOpacity onPress={flipCamera}>
            <Icon type='feather' name='refresh-ccw' color='white' />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
            <Icon type='feather' name='aperture' color='white' />
          </TouchableOpacity>
          <TouchableOpacity onPress={pickImage}>
            <Icon type='feather' name='image' color='white' />
          </TouchableOpacity>
        </View>
    </Camera>
  )
}

export default CameraComponent