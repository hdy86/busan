import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Rules({navigation}) {
  return (
    <View>
      <Text>Rules</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
