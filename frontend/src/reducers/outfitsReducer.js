import { GET_OUTFITS, GET_OUTFITS_ERROR } from '../actions';

const defaultState = {
  outfits: [],
  error: '',
};

const OutfitsReducer = function (state = defaultState, action) {
  switch (action.type) {
    case GET_OUTFITS:
      return {
        outfits: action.payload,
        error: '',
      };
    case GET_OUTFITS_ERROR:
      return {
        outfits: [],
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default OutfitsReducer;
