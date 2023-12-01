
import axios from 'axios';
import { useEffect, useState } from 'react';

import CaseList from "./Components/CaseList/CaseList"
import Header from "./Components/Header/Header"

const App = () => {
  //State for tasks
  const [todolist, setTodolist] = useState([])

    useEffect(() => {

      //Checking if the array of tasks is in localstorage during the first rendering
      const data = JSON.parse(localStorage.getItem('tasks'))
      if(data){
        setTodolist(data)
      } else {

      //Fetching array the first time from jsonplaceholder 
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => setTodolist(res.data))
      }
    }, [])

    useEffect(() => {

    //Saving array of tasks to the localstorage
      localStorage.setItem('tasks', JSON.stringify(todolist));
      console.log('setITem')
    }, [todolist]);

  //Function for deleting task from array
  const handleDelete = (taskId) => {
    setTodolist( todolist.filter( item => item.id !== taskId))
  }

  //Function for updating task name in the array
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
