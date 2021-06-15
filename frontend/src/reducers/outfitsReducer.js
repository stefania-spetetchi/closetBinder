import { GET_OUTFITS } from '../actions';

const defaultState = {};

const OutfitsReducer = function (state = defaultState, action) {
  switch (action.type) {
    case GET_OUTFITS:
      return {
        outfits: action.payload,
      };
    default:
      return state;
  }
};

export default OutfitsReducer;
