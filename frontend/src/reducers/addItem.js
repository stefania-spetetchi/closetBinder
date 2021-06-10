import { ADD_ITEM_TO_OUTFIT } from "../actions";

const defaultState = {outfitItems: []};

const AddItem = function (state = defaultState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_OUTFIT:
      return {
        ...state,
        outfitItems: [action.payload, ...state.outfitItems]
      };
    default:
      return state;
  }
} 

export default AddItem;