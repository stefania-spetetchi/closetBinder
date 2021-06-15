import { combineReducers } from 'redux';
import ItemsReducer from './itemsReducer';
import AddItem from './addItem';
import OutfitsReducer from './outfitsReducer';

const rootReducer = combineReducers({
  items: ItemsReducer,
  outfitItems: AddItem,
  outfits: OutfitsReducer,
});

export default rootReducer;
