import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { languageReducer } from './reducers/language';

const rootReducer = combineReducers({ language: languageReducer });

export const store = createStore(rootReducer, composeWithDevTools());
