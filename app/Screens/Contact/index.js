import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import {commonStyles} from '../../common';
import SubTitle from '../../Components/SubTitle';
import {useTranslation} from 'react-i18next';

export default function Contact({navigation}) {
  const {t} = useTranslation();

  return (
    <View style={commonStyles.grayBg}>
      <SubTitle navigation={navigation} title={t('main_title5')} />
      <View style={commonStyles.container}>
        <View>
          <Text style={styles.title}>{t('sub_page5_t1')}</Text>
          <Text style={styles.desc}>{t('sub_page5_t1_t1')}</Text>
          <Text style={styles.desc}>{t('sub_page5_t1_t2')}</Text>
        </View>
        <View style={styles.btnWrap}>
          <Text style={styles.title}>{t('sub_page4_t1')}</Text>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() =>
              Linking.openURL(
                'https://dorm.pusan.ac.kr/dorm/bbs/list03/20000603',
              )
            }>
            <Text style={styles.btnText}>{t('sub_page4_b1')}</Text>
          </TouchableOpacity>
          <Text style={styles.desc}>{t('sub_page4_b1_t')}</Text>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() =>
              Linking.openURL(
                'https://dorm.pusan.ac.kr/dorm/bbs/list03/20000602',
              )
            }>
            <Text style={styles.btnText}>{t('sub_page4_b2')}</Text>
          </TouchableOpacity>
          <Text style={styles.desc}>{t('sub_page4_b2_t')}</Text>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => Linking.openURL('tel:010-1234-1234')}>
            <Text style={styles.btnText}>{t('sub_page4_b3')}</Text>
          </TouchableOpacity>
          <Text style={styles.desc}>{t('sub_page4_b3_t')}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#222',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 10,
    marginTop: 12,
  },
  btnWrap: {
    marginTop: 30,
  },
  btnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: 'rgb(100,124,184)',
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
  },
});
