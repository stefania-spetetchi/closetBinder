import { combineReducers } from "redux";
import ItemsReducer from "./itemsReducer";
import AddItem from "./addItem";

const rootReducer = combineReducers({
  items: ItemsReducer,
  item: AddItem
});

export default rootReducer;