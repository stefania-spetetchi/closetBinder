import { combineReducers } from "redux";
import ItemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
  items: ItemsReducer,
});

export default rootReducer;