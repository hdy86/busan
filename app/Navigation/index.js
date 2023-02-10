import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider, useSelector} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import i18n from '../config/lang/i18n';

import Home from '../Screens/Home';
import Alarm from '../Screens/Alarm';
import Food from '../Screens/Food';
import Notice from '../Screens/Notice';
import Rules from '../Screens/Rules';
import Contact from '../Screens/Contact';

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const langState = useSelector(state => state.code);

  return (
    <I18nextProvider i18n={i18n(langState)}>
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
  );
}
