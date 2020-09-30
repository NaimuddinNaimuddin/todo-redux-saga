import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import AddTodo from '../component/AddTodo'
import FilterTodos from '../component/FilterTodos'
import ShowTodo from '../component/ShowTodo'
import { addTodos1, checkTodos1, deleteTodos1, editTodos1, } from '../redux/action/index';

function Home() {
    const [filter, filterUpdate] = useState('all')
    const todos = useSelector((state) => state.TodoReducerstatus)
    const dispatch = useDispatch();

    const addHandler = (data) => {
        dispatch(addTodos1(data))
    }
    const checkHandler = (newData) => {
        dispatch(checkTodos1({ id: newData.id, isDone: newData.isDone }))
    }
    const deleteHandler = (id) => {
        dispatch(deleteTodos1(id))
    }
    const editHandler = (id, value) => {
        dispatch(editTodos1({ id, value }))
    }
    const filterTodos = (data) => {
        filterUpdate(data)
    }

    const todosNew = todos.filter((e) => {
        if (filter === 'all') {
            return e.isDone === true || e.isDone === false
        } else if (filter === 'true') {
            return e.isDone === true
        } else if (filter === 'false') {
            return e.isDone === false
        }
    })

    return (
        <div>
            <AddTodo addHandler={addHandler} />
            <FilterTodos filterTodos={filterTodos} />
            <ShowTodo todos={todosNew}
                checkHandler={checkHandler}
                deleteHandler={deleteHandler}
                editHandler={editHandler} />
        </div>
    )
}
export default Home
