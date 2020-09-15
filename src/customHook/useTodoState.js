import { useState } from 'react';
// import useList from '../hooks/useList'


function useTodoState(iState) {

    const [todos, todosUpdate] = useState(iState)

    return [todos,todosUpdate]
}

export default useTodoState