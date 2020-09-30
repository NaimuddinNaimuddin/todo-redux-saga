import { createAction } from "redux-actions";
import * as constant from "../constant";

export const addTodos = createAction(constant.ADD_TODO);
export const checkTodos = createAction(constant.CHECK_TODO);
export const deleteTodos = createAction(constant.DELETE_TODO);
export const editTodos = createAction(constant.EDIT_TODO);
export const filterTodos = createAction(constant.FILTER_TODO);


export const addTodos1 = createAction(constant.ADD_TODO1);
export const checkTodos1 = createAction(constant.CHECK_TODO1);
export const deleteTodos1 = createAction(constant.DELETE_TODO1);
export const editTodos1 = createAction(constant.EDIT_TODO1);
export const filterTodos1 = createAction(constant.FILTER_TODO1);


export const allTodos = createAction(constant.ALL_TODO);
export const completeTodos = createAction(constant.COMPLETE_TODO);
export const ascTodos = createAction(constant.ASC_TODO);
export const dscTodos = createAction(constant.DSC_TODO);