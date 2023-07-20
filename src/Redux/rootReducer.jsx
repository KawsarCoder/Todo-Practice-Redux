import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import todoReducer from "./todos/Reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
