import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import Cards from "./Cards";
import Admin from "./Admin";

export default combineReducers({
  cards: Cards,
  form: formReducer,
  admin: Admin
});
