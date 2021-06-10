import { ADD_ITEM_TO_OUTFIT } from "../actions";

const defaultState = {};

const AddItem = function (state = defaultState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_OUTFIT:
      return {
        item: action.payload
      };
    default:
      return state;
  }
} 

export default AddItem;