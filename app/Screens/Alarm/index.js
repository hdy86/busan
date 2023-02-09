import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, Button} from 'react-native';
import {commonStyles} from '../../common';
import SubTitle from '../../Components/SubTitle';

export default function Alarm({navigation}) {
  const {t} = useTranslation();
  return (
    <View style={commonStyles.grayBg}>
      <SubTitle navigation={navigation} title={t('main_title1')} />
    </View>
  );
}
