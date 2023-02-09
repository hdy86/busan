/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Screens/Home';
import Alarm from './Screens/Alarm';
import Food from './Screens/Food';
import Notice from './Screens/Notice';
import Rules from './Screens/Rules';
import Contact from './Screens/Contact';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Alarm" component={Alarm} />
          <Stack.Screen name="Food" component={Food} />
          <Stack.Screen name="Notice" component={Notice} />
          <Stack.Screen name="Rules" component={Rules} />
          <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
