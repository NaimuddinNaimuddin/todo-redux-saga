import React from 'react'
import ToDo from '../component/ToDo'


function ShowTodo(props) {
  return (
    <div>
      { console.log(props)}
       {  
         props.todos.sort((a, b) => {
                return new Date(a.completeAt).getTime() - new Date(b.completeAt).getTime()
            }).map(e => {
                return <ToDo key={e.id}
                    id={e.id}
                    title={e.title}
                    isDone={e.isDone}
                    createdAt={e.createdAt}
                    completeAt={e.completeAt}
                    checkHandler={props.checkHandler}
                    deleteHandler={props.deleteHandler}
                    editHandler={props.editHandler} />
            })}
    </div>
  )
}



export default ShowTodo