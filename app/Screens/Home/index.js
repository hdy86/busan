import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  ImageBackground,
} from 'react-native';

export default function Home({navigation}) {
  useEffect(() => {
    // console.log(navigation);
  }, []);
  return (
    <View style={styles.wrap}>
      <ImageBackground
        source={require('../../images/bg.jpg')}
        resizeMode="cover"
        style={styles.bg}>
        <View style={styles.container}>
          <View>
            <Button title="한국어" />
            <Button title="ENG" />
          </View>
          <View>
            <Image source={require('../../images/logo.png')} />
          </View>
          <Text>Home</Text>
          <Button
            title="Go to Alarm"
            onPress={() => navigation.navigate('Alarm')}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
  },
  bg: {
    flex: 1,
  },
});
