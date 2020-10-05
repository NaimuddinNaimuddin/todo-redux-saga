import { createAction } from "redux-actions";
import * as constant from "../constant";
export const addTodos = createAction(constant.ADD_TODO);
export const checkTodos = createAction(constant.CHECK_TODO);
export const deleteTodos = createAction(constant.DELETE_TODO);
export const editTodos = createAction(constant.EDIT_TODO);
export const filterTodos = createAction(constant.FILTER_TODO);
export const addTodo = createAction(constant.ADD_TODO_S);
export const checkTodo = createAction(constant.CHECK_TODO_S);
export const deleteTodo = createAction(constant.DELETE_TODO_S);
export const editTodo = createAction(constant.EDIT_TODO_S);
export const filterTodo = createAction(constant.FILTER_TODO_S);
export const allTodos = createAction(constant.ALL_TODO);
export const completeTodos = createAction(constant.COMPLETE_TODO);
export const ascTodos = createAction(constant.ASC_TODO);
export const dscTodos = createAction(constant.DSC_TODO);