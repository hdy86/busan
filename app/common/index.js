import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  grayBg: {
    flex: 1,
    backgroundColor: '#eee',
  },
  subTitWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 5,
  },
  backLink: {
    padding: 10,
    marginRight: 20,
  },
  backImg: {
    width: 24,
    height: 24,
  },
  subTitText: {
    fontSize: 20,
    color: '#222',
  },
  container: {padding: 20},
});
