import { combineReducers } from "redux";
import * as home from "./home";
import * as user from "./user";

const reducers = combineReducers({
  ...home,
  ...user
});

export default reducers;
