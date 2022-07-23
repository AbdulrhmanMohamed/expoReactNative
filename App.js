import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home'
import Google from'./screens/Google'
import Info from'./screens/Info'
import About from './screens/About';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash}  />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Google" component={Google} options={{headerShown: false}}/>
          <Stack.Screen name="Info" component={Info} options={{headerShown: false}}/>
          <Stack.Screen name='about' component={About} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});