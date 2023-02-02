import React, { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Camera , CameraType} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker';
import { Icon } from '@rneui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'

const AddPost = ({navigation}) => {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(null)
  const [image, setImage] = useState(null)
  const [type,setType] = useState(Camera.Constants.Type.back)
  const cameraRef = useRef()

  useEffect(()=>{
    (async () => {
      MediaLibrary.requestPermissionsAsync()
      const cameraStatus = await Camera.requestCameraPermissionsAsync()
      setHasCameraPermissions(cameraStatus.status==='granted')
    })();
  },[])

  if(hasCameraPermissions===false){
    return <Text className='text-white'>No access to camera</Text>
  }

  const takePicture = async () => {
    if(cameraRef){
      try {
        const data = await cameraRef.current.takePictureAsync()
        console.log(data)
        setImage(data.uri)
        navigation.navigate('AddPost',{imageUrl: image})
      } catch (error) {
        console.log(error)
      }
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
      setImage(result.assets[0].uri);
      navigation.navigate('AddPost',{imageUrl: result.assets[0].uri})
    }
  }

  return (
    <View className='flex-1 w-full'>
      <Camera className='flex-1 relative w-full' type={type} ref={cameraRef}>
        <SafeAreaView>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icon type='feather' name='x' color='white' />
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView className='absolute w-full px-5 flex-row bottom-0 items-center justify-between'>
          <TouchableOpacity onPress={pickImage}>
            <Icon type='feather' name='image' color='white' />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture}>
            <Icon type='feather' name='camera' color='white' size={40} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {
            setType(type===CameraType.back ? CameraType.front : CameraType.back)
          }}>
            <Icon type='feather' name='repeat' color='white' />
          </TouchableOpacity>
        </SafeAreaView>
      </Camera>
    </View> 
  )
}

export default AddPost