import { combineReducers } from "redux";
import todoReducer from "./TodoReducer";
import filterTodoReducer from './FilterTodoReducer';

const rootReducer = combineReducers({
  TodoReducerstatus: todoReducer,
  FilterTodoReducerStatus: filterTodoReducer,
  // CheckedReducerStatus: checkedReducer,
  // AllTodoReducerStatus: allTodoReducer
});

export default rootReducer;