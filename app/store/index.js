import {createStore} from 'redux';
import {LANGUAGE_TYPE} from '../config/langType';

const reducer = (state = 'ko-KR', action) => {
  switch (action.type) {
    case 'KO':
      return 'ko-KR';
    case 'EN':
      return 'en-US';
    default:
      return state;
  }
};
const store = createStore(reducer);

export const langChange = lang => {
  return {type: lang};
};

export default store;
