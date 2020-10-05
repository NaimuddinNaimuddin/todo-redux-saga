import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Header from '../component/Header'
import AddTodo from '../component/AddTodo'
import FilterTodos from '../component/FilterTodos'
import ShowTodo from '../component/ShowTodo'
import { addTodo, checkTodo, deleteTodo, editTodo, } from '../redux/action/index';

function Home() {
    const [filter, filterUpdate] = useState('all')
    const todos = useSelector((state) => state.TodoReducerstatus)
    const dispatch = useDispatch();

    const addHandler = (data) => {
        dispatch(addTodo(data))
    }
    const checkHandler = (newData) => {
        dispatch(checkTodo({ id: newData.id, isDone: newData.isDone }))
    }
    const deleteHandler = (id) => {
        dispatch(deleteTodo(id))
    }
    const editHandler = (id, value) => {
        dispatch(editTodo({ id, value }))
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
            <Header/>
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
