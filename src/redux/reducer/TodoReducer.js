import * as constant from "../constant";

let list = [{ "id": 1234, "title": "reactjs1", "isDone": false, "createdAt": "2020-03-02", "completeAt": "2020-03-02" },
{ "id": 2204, "title": "angular1", "isDone": false, "createdAt": "2020-05-04", "completeAt": "2020-04-05" },
{ "id": 2234, "title": "nodejs1", "isDone": true, "createdAt": "2020-05-04", "completeAt": "2020-08-06" },]
let storageList = JSON.parse(localStorage.getItem("todos")) || list

function todoReducer(todoList = storageList, action) {
  if (action.type === constant.ADD_TODO) {
    localStorage.setItem("todos", JSON.stringify([...todoList, action.payload]))
    return [...todoList, action.payload];
  }
  else if (action.type === constant.DELETE_TODO) {
    let newList = todoList.filter(i => {
      return i.id !== action.payload
    })
    localStorage.setItem("todos", JSON.stringify([...newList]))
    return [...newList]
  }
  else if (action.type === constant.EDIT_TODO) {
    let index = todoList.findIndex(element => element.id === action.payload.id)
    let newList = [...todoList]
    newList[index] = { ...newList[index], "title": action.payload.value }
    localStorage.setItem("todos", JSON.stringify([...newList]))
    return [...newList]
  }
  else if (action.type === constant.CHECK_TODO) {
    let index = todoList.findIndex(element => element.id === action.payload.id)
    let newList = [...todoList]
    newList[index] = { ...newList[index], "isDone": action.payload.isDone }
    localStorage.setItem("todos", JSON.stringify([...newList]))
    return [...newList]
  }
  else return todoList;
}
export default todoReducer;