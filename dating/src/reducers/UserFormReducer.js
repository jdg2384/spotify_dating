import {
  UPDATE_PROPERTY,
  UPDATE_AGE,
} from '../actions/types';

const INITIAL_STATE = {
  age: '',
  gender: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {

    case UPDATE_PROPERTY:
      return { ...state, [action.payload.prop]: action.payload.value };
    case UPDATE_AGE:
      console.log(action.value);
      return { ...state, age: action.value };
      // check out direct manipulation (from bookmarks) to clear text input on faulty input
    default:
      return state;
  }
};
