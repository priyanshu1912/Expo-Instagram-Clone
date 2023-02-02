import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Main from './screens/Home/Main';
import Landing from './screens/landing/Landing';
import CameraScreen from './screens/CameraScreen';
import AddPost from './screens/AddPost';
import {Provider} from 'react-redux'
import { Store } from './redux/Store';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={Store}>
      <StatusBar/>
      <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle:{
          backgroundColor:'white'
        }
      }}>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='Landing' component={Landing}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='CameraScreen' component={CameraScreen}/>
        <Stack.Screen name='AddPost' component={AddPost} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
  );
}
