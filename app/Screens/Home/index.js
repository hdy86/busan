import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {commonStyles} from '../../common';

export default function Home({navigation}) {
  useEffect(() => {
    // console.log(navigation);
  }, []);
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../../images/bg.jpg')}
        resizeMode="cover"
        style={styles.bg}>
        <View style={commonStyles.container}>
          <View style={styles.btnWrap}>
            <TouchableOpacity style={[styles.btnStyle, styles.btnActive]}>
              <Text style={[styles.btnText, styles.btnTextActive]}>한국어</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.btnText}>ENG</Text>
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
                <Text style={styles.menuText}>알림확인</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => navigation.navigate('Food')}>
                <Image
                  style={styles.menuImg}
                  source={require('../../images/i2.png')}
                  resizeMode={'contain'}
                />
                <Text style={styles.menuText}>식단안내</Text>
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
                <Text style={styles.menuText}>공지사항</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => navigation.navigate('Rules')}>
                <Image
                  style={styles.menuImg}
                  source={require('../../images/i4.png')}
                  resizeMode={'contain'}
                />
                <Text style={styles.menuText}>원생수칙</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => navigation.navigate('Contact')}>
                <Image
                  style={styles.menuImg}
                  source={require('../../images/i5.png')}
                  resizeMode={'contain'}
                />
                <Text style={styles.menuText}>이용문의</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

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
