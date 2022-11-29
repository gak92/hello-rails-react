import { combineReducers } from '@reduxjs/toolkit';
import greetingReducer from './greetingReducer';

const rootReducer = combineReducers({
  greetingReducer,
});

export default rootReducer;
