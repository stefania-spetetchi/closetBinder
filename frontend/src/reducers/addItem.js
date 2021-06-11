import { ADD_ITEM_TO_OUTFIT, REMOVE_ITEM_TO_OUTFIT } from '../actions';

const defaultState = { outfitItems: [] };

const AddItem = function (state = defaultState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_OUTFIT:
      console.log('here plz');
      console.log(action);
      return {
        ...state,
        outfitItems: [action.payload, ...state.outfitItems],
      };
    case REMOVE_ITEM_TO_OUTFIT:
      return {
        ...state,
        outfitItems: state.outfitItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AddItem;
