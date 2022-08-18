export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const sendPersonalData = (language) => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});
