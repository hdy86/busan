import React from 'react';
import {Text, View} from 'react-native';
import {commonStyles} from '../../common';
import SubTitle from '../../Components/SubTitle';
import WebviewContainer from '../../Components/WebviewContainer';

export default function Food({navigation}) {
  return (
    <View style={commonStyles.grayBg}>
      <SubTitle navigation={navigation} title={'식단안내'} />
      <WebviewContainer
        url={'https://dorm.pusan.ac.kr/dorm/function/mealPlan/2000040301'}
      />
    </View>
  );
}
