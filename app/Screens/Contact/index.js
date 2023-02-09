import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {commonStyles} from '../../common';
import SubTitle from '../../Components/SubTitle';

export default function Contact({navigation}) {
  return (
    <View style={commonStyles.grayBg}>
      <SubTitle navigation={navigation} title={'이용문의'} />
      <View style={commonStyles.container}>
        <View>
          <Text style={styles.title}>어플리케이션 안내 및 알림 수신 방법</Text>
          <Text style={styles.desc}>
            * 본 어플리케이션은 생활원 공지알림 수신을 위한 PUSH 전용 앱으로
            생활원 알림을 수신하고자 하는 모든 분이 이용가능합니다.
          </Text>
        </View>
        <View style={styles.btnWrap}>
          <Text style={styles.title}>이용방법 문의</Text>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnText}>원생</Text>
          </TouchableOpacity>
          <Text style={styles.desc}>ㅇㅇㅇ</Text>
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
