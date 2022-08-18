import { CHANGE_LANGUAGE } from '../actions';

const INITIAL_STATE = 'en';

export const languageReducer = (state = INITIAL_STATE, action) => {
  if (action.type === CHANGE_LANGUAGE) {
    return action.payload;
  }
  return state;
};
