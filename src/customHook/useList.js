// import { useEffect } from 'react';

function useList() {

    const list = [{ "id": 1234, "title": "reactjs", "isDone": false, "createdAt": "2020-03-02", "completeAt": "2020-03-02" },
    { "id": 2204, "title": "angular", "isDone": false, "createdAt": "2020-05-04", "completeAt": "2020-04-05" },
    { "id": 2234, "title": "nodejs", "isDone": true, "createdAt": "2020-05-04", "completeAt": "2020-08-06" },
    ]

    return JSON.parse(localStorage.getItem("todos")) || list
}

export default useList