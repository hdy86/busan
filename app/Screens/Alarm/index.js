import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Alarm({navigation}) {
  return (
    <View>
      <Text>Alarm</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
