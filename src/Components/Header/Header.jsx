import { useState } from 'react'
import './Header.css'
const Header = ({ todolist, setTodolist }) => {
	const [taskName, setTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodolist([{title:taskName, id: Date.now()},...todolist])
    setTaskName('')
  }

	return (
		<div className='header'>
			<h1>To do list</h1>
			<form onSubmit={handleSubmit}>
				<input
					className='new-task-input'
					placeholder='Enter a new case...'
					onChange={(e) => setTaskName(e.target.value)}
					value={taskName}
				/>
				<input type='submit' className='new-task-submit' value='Добавити' />
			</form>
		</div>
	)
}

export default Header
