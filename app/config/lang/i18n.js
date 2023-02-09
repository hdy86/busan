import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {LANGUAGE_TYPE} from '../langType';

import langEn from './lang.en.json';
import langKo from './lang.ko.json';

const resource = {
  [LANGUAGE_TYPE.EN]: {translation: langEn},
  [LANGUAGE_TYPE.KO]: {translation: langKo},
};

const init = lang => {
  i18n.use(initReactI18next).init({
    resources: resource,
    fallbackLng: {
      'en-US': ['en-US'],
      default: ['ko-KR'],
    },
    debug: true,
    defaultNS: 'translation',
    ns: 'translation',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    // 초기 설정 언어
    lng: lang,
  });
};

export default init;
