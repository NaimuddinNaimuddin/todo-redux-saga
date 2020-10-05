import { fork, all } from "redux-saga/effects";
import TodoRequest from './TodoSaga';

function* combineSaga() {
  yield all([ fork(TodoRequest)]);
}
export default combineSaga



