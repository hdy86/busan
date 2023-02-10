import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, Button, StyleSheet, ScrollView, Image} from 'react-native';
import {commonStyles} from '../../common';
import SubTitle from '../../Components/SubTitle';

export default function Alarm({navigation}) {
  const {t} = useTranslation();
  return (
    <View style={commonStyles.grayBg}>
      <SubTitle navigation={navigation} title={t('main_title1')} />
      <View style={{paddingHorizontal: 10}}>
        <View style={styles.titWrap}>
          <Text style={styles.title}>{t('sub_page1_t1')}</Text>
          <Button title={'토글'} />
        </View>
        <View style={styles.titWrap}>
          <Text style={styles.title}>{t('sub_page1_t2')}</Text>
        </View>
        <ScrollView>
          <View>
            <View style={styles.togTit}>
              <Text style={styles.togTitText}>웅비관</Text>
              <Image />
            </View>
            <View style={styles.togDesc}>
              <Text style={styles.togDescText}>내용</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titWrap: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: '#222',
    fontWeight: 'bold',
  },
});
