import axios from 'axios';
import { useEffect, useState } from 'react';

import "./CaseList.css"
import Case from '../Case/Case';

const CaseList = () => {

    const [todolist, setTodolist] = useState([])
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => setTodolist(res.data))
    }, [])

  return (
    <div className='task-list'>
        <h2>Tasks</h2>
        {todolist.map( (item) => (
          <Case title = {item.title} id = {item.id} key = {item.id} />
        // console.log(item.title)
      ))}
    </div>
  )
}

export default CaseList
