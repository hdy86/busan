import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {commonStyles} from '../../common';
import SubTitle from '../../Components/SubTitle';
import WebviewContainer from '../../Components/WebviewContainer';

export default function Rules({navigation}) {
  const {t} = useTranslation();
  return (
    <View style={commonStyles.grayBg}>
      <SubTitle navigation={navigation} title={t('main_title4')} />
      <WebviewContainer
        url={'https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401'}
      />
    </View>
  );
}
