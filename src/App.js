
import axios from 'axios';
import { useEffect, useState } from 'react';

import CaseList from "./Components/CaseList/CaseList"
import Header from "./Components/Header/Header"

const App = () => {

  const [todolist, setTodolist] = useState([])
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => setTodolist(res.data))
    }, [])

  const handleDelete = (taskId) => {
    setTodolist( todolist.filter( item => item.id !== taskId))
  }

  const handleUpdate = (taskId, newTitle) => {
    setTodolist(todolist.map(item => item.id === taskId ? { ...item, title: newTitle } : item))
  }

	return (
		<div>
			<Header todolist={todolist} setTodolist={setTodolist}/>
      <CaseList todolist={todolist} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
		</div>
	)
}

export default App
