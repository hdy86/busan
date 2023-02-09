import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Notice({navigation}) {
  return (
    <View>
      <Text>Notice</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
