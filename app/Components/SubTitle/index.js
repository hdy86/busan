import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {commonStyles} from '../../common';

export default function SubTitle({navigation, title}) {
  return (
    <View style={commonStyles.subTitWrap}>
      <TouchableOpacity
        style={commonStyles.backLink}
        onPress={() => navigation.navigate('Home')}>
        <Image
          style={commonStyles.backImg}
          src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <Text style={commonStyles.subTitText}>{title}</Text>
    </View>
  );
}
