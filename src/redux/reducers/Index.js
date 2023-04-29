import { combineReducers } from "redux";
import DataReducer from "./dataReducer";

const reducers = combineReducers({
  Data: DataReducer,
});

export default reducers;
