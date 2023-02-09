import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Food({navigation}) {
  return (
    <View>
      <Text>Food</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
