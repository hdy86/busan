/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {I18nextProvider} from 'react-i18next';
import i18n from './config/lang/i18n';
import {Provider} from 'react-redux';
import store from './store';

import Home from './Screens/Home';
import Alarm from './Screens/Alarm';
import Food from './Screens/Food';
import Notice from './Screens/Notice';
import Rules from './Screens/Rules';
import Contact from './Screens/Contact';

window.onload = () => {
  console.log(
    'language ::!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ',
    window.navigator.language,
  );
  render();
  // KO: 'ko-KR',
  // EN: 'en-US',
};

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Provider store={store}>
        <I18nextProvider i18n={i18n(window.navigator.language)}>
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
        </I18nextProvider>
      </Provider>
    </>
  );
}

export default App;
