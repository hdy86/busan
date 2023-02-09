import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';

export default function Home({navigation}) {
  useEffect(() => {
    // console.log(navigation);
  }, []);
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Alarm"
        onPress={() => navigation.navigate('Alarm')}
      />
    </View>
  );
}
