import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';

import dentakuReducer from './dentaku';

const reducer = combineReducers({
  dentaku: dentakuReducer,
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

export default store;
