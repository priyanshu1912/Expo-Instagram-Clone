import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './screens/Login';
import Main from './screens/Main/Main';
import AddPost from './screens/AddPost';

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
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen name='AddPost' component={AddPost}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
