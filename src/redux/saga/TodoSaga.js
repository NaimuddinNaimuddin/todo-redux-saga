import { takeLatest, put } from 'redux-saga/effects'
import * as constant from '../constant'
import { editTodos, checkTodos, addTodos, deleteTodos } from '../action/index'

function* AddTodoSaga(action) {
    yield put(addTodos(action.payload));
}
function* EditTodoSaga(action) {
    yield put(editTodos(action.payload));
}
function* DeleteTodoSaga(action) {
    yield put(deleteTodos(action.payload));
}
function* CheckTodoSaga(action) {
    yield put(checkTodos(action.payload));
}
export default function* TodoRequest() {
    yield takeLatest(constant.ADD_TODO_S, AddTodoSaga);
    yield takeLatest(constant.EDIT_TODO_S, EditTodoSaga);
    yield takeLatest(constant.DELETE_TODO_S, DeleteTodoSaga);
    yield takeLatest(constant.CHECK_TODO_S, CheckTodoSaga);
}



