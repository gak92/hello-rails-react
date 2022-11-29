import * as actions from '../actions/types';

const initialState = [];

const greetingReducer = (state = initialState, action) => {
  switch(action.type) {
    case `${actions.RANDOM_GREETING}/fulfilled`:
      console.log("fulfilled: ", action);
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
