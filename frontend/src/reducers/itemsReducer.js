import { GET_ITEMS, GET_ITEMS_ERROR } from '../actions';

const defaultState = {
  items: [],
  error: '',
};

const ItemsReducer = function (state = defaultState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        items: action.payload,
        error: '',
      };
    case GET_ITEMS_ERROR:
      return {
        items: [],
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default ItemsReducer;
