import { GET_ITEMS } from '../actions';

const defaultState = {};

const ItemsReducer = function (state = defaultState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        items: action.payload,
      };
    default:
      return state;
  }
};

export default ItemsReducer;
