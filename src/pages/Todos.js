import React from 'react'
import ToDo from '../component/ToDo'
import AddTodo from '../component/AddTodo'
import FilterTodos from '../component/FilterTodos'
import useListF from '../customHook/useList'
import useTodoState from '../customHook/useTodoState'

function Todos() {
    const useList = useListF()

    const [todos, todosUpdate] = useTodoState(useList)

    const add = (data) => {
        todosUpdate([...todos, data])
        localStorage.setItem("todos", JSON.stringify([...todos, data]))
    }

    const checkHandler = (newData) => {

        let index = todos.findIndex(element => element.id === newData.id)
        let newList = [...todos]
        newList[index] = { ...newList[index], "isDone": newData.isDone }
        todosUpdate([...newList])
        localStorage.setItem("todos", JSON.stringify([...newList]))
    }

    const deleteHandler = (id) => {

        // let index = todos.findIndex(element => element.id === id)
        let newList = todos.filter(i => {
            return i.id !== id
        })

        todosUpdate([...newList])
        localStorage.setItem("todos", JSON.stringify([...newList]))
    }

    const editHandler = (id, value) => {
        // console.log(id ,value)
        let index = todos.findIndex(element => element.id === id)

        let newList = [...todos]
        newList[index] = { ...newList[index], "title": value }
        todosUpdate([...newList])
        localStorage.setItem("todos", JSON.stringify([...newList]))

    }

    const filterTodos = (data) => {

        if (data === "true") {
            todosUpdate([...useList].filter(i => {
                return i.isDone.toString() === data
            }))
        } else if (data === "false") {
            todosUpdate([...useList].filter(i => {
                return i.isDone.toString() === data
            }))
        } else if (data === "all") {
            todosUpdate([...useList])
        }
    }

    return (
        <div>
            <AddTodo add={add} />
            <FilterTodos filterTodos={filterTodos} />

            {todos.sort((a, b) => {
                return new Date(a.completeAt).getTime() - new Date(b.completeAt).getTime()
            }).map(e => {
                return <ToDo key={e.id}
                    id={e.id}
                    title={e.title}
                    isDone={e.isDone}
                    createdAt={e.createdAt}
                    completeAt={e.completeAt}
                    checkHandler={checkHandler}
                    deleteHandler={deleteHandler}
                    editHandler={editHandler} />
            })
            }

        </div>
    )
}

export default Todos