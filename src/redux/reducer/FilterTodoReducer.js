import * as constant from '../constant';

let list = [{ "id": 1234, "title": "reactjs1", "isDone": false, "createdAt": "2020-03-02", "completeAt": "2020-03-02" },
{ "id": 2204, "title": "angular1", "isDone": false, "createdAt": "2020-05-04", "completeAt": "2020-04-05" },
{ "id": 2234, "title": "nodejs1", "isDone": true, "createdAt": "2020-05-04", "completeAt": "2020-08-06" },]
let storageList = JSON.parse(localStorage.getItem("todos")) || list

function filterTodoReducer(todoList = storageList, action) {
    switch (action.type) {
        case constant.FILTER_TODO_S: {
            if (action.payload === "true") {
                console.log([])
                return []
            }
            else if (action.payload === "false") {
                console.log([])
                return [...todoList]
            }
            else {
                console.log([...todoList])
                return [...todoList]
            }
        }
        default:
            return [...todoList]
    }
}
export default filterTodoReducer;