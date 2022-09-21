import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//components
import Welcone from './src/pages/Welcone/index'
import Login from './src/pages/Login/index'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38a69d" barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen
        name="welcone"
        component={Welcone} 
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="login" 
        component={Login} 
        options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


