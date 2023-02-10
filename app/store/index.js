import {createStore} from 'redux';
import {LANGUAGE_TYPE} from '../config/langType';

export const KO = 'KO';
export const EN = 'EN';

const initialState = {
  code: LANGUAGE_TYPE.KO,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case KO:
      return {
        ...state,
        code: action.code,
      };
    case EN:
      return {
        ...state,
        code: action.code,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

export const langKor = () => {
  return {type: KO, code: LANGUAGE_TYPE.KO};
};
export const langEng = () => {
  return {type: EN, code: LANGUAGE_TYPE.EN};
};

export default store;
