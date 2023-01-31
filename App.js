import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Main from './screens/Home/Main';
import CameraScreen from './screens/CameraScreen';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle:{
          backgroundColor:'white'
        }
      }}>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='CameraScreen' component={CameraScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
