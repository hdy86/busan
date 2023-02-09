import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {langChange} from '../../store';
import {commonStyles} from '../../common';
import {connect} from 'react-redux';

function Home({navigation}) {
  const {t} = useTranslation();
  const [nowLang, setNowLang] = useState('KO');

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../../images/bg.jpg')}
        resizeMode="cover"
        style={styles.bg}>
        <View style={commonStyles.container}>
          <View style={styles.btnWrap}>
            <TouchableOpacity
              style={
                nowLang === 'KO'
                  ? [styles.btnStyle, styles.btnActive]
                  : [styles.btnStyle]
              }
              onPress={() => {
                setNowLang('KO');
                langChange('KO');
              }}>
              <Text
                style={
                  nowLang === 'KO'
                    ? [styles.btnText, styles.btnTextActive]
                    : [styles.btnText]
                }>
                한국어
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                nowLang === 'EN'
                  ? [styles.btnStyle, styles.btnActive]
                  : [styles.btnStyle]
              }
              onPress={() => {
                setNowLang('EN');
                langChange('EN');
              }}>
              <Text
                style={
                  nowLang === 'EN'
                    ? [styles.btnText, styles.btnTextActive]
                    : [styles.btnText]
                }>
                ENG
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logoWrap}>
            <Image
              style={styles.logoImg}
              source={require('../../images/logo.png')}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.menuWrap}>
            <View style={styles.menuGrid2}>
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => navigation.navigate('Alarm')}>
                <Image
                  style={styles.menuImg}
                  source={require('../../images/i1.png')}
                  resizeMode={'contain'}
                />
                <Text style={styles.menuText}>{t('main_title1')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => navigation.navigate('Food')}>
                <Image
                  style={styles.menuImg}
                  source={require('../../images/i2.png')}
                  resizeMode={'contain'}
                />
                <Text style={styles.menuText}>{t('main_title2')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuGrid3}>
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => navigation.navigate('Notice')}>
                <Image
                  style={styles.menuImg}
                  source={require('../../images/i3.png')}
                  resizeMode={'contain'}
                />
                <Text style={styles.menuText}>{t('main_title3')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => navigation.navigate('Rules')}>
                <Image
                  style={styles.menuImg}
                  source={require('../../images/i4.png')}
                  resizeMode={'contain'}
                />
                <Text style={styles.menuText}>{t('main_title4')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => navigation.navigate('Contact')}>
                <Image
                  style={styles.menuImg}
                  source={require('../../images/i5.png')}
                  resizeMode={'contain'}
                />
                <Text style={styles.menuText}>{t('main_title5')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {langChange: state => dispatch(langChange(state))};
}

export default connect(null, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  bg: {flex: 1},
  btnWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
    height: 60,
  },
  btnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  btnActive: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  btnText: {
    color: '#222',
  },
  btnTextActive: {
    color: '#fff',
  },
  logoWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '24%',
    paddingBottom: 40,
  },
  logoImg: {
    maxWidth: '80%',
  },
  menuWrap: {
    height: '56%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuGrid2: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
  },
  menuGrid3: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  menuBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  menuImg: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 20,
    color: '#222',
  },
});
