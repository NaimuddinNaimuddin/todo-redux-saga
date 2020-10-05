import { combineReducers } from "redux";
import todoReducer from "./TodoReducer";
import filterTodoReducer from './FilterTodoReducer';

const rootReducer = combineReducers({
  TodoReducerstatus: todoReducer,
  FilterTodoReducerStatus: filterTodoReducer,
});
export default rootReducer;