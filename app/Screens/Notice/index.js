import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, Button} from 'react-native';
import {commonStyles} from '../../common';
import SubTitle from '../../Components/SubTitle';
import WebviewContainer from '../../Components/WebviewContainer';

export default function Notice({navigation}) {
  const {t} = useTranslation();
  return (
    <View style={commonStyles.grayBg}>
      <SubTitle navigation={navigation} title={t('main_title3')} />
      <WebviewContainer
        url={'https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601'}
      />
    </View>
  );
}
