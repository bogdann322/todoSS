import { useState } from 'react'
import './Case.css'

const Case = ({ title, id, handleDelete, handleUpdate }) => {

	//State for toggle buttons update and save
	const [isReadOnly, setIsReadOnly] = useState(true)

	//State for unpdating task name
	const [titleInput, setTitleInput] = useState(title)

	return (
		<div className='task'>
			<div className='content'>
				<input
					type='text'
					className='text'
					value={titleInput}
					readOnly={isReadOnly}
					onChange={(e) => setTitleInput(e.target.value)}
					ref={(ref) => ref && ref.focus()}
					onFocus={(e) =>
						e.currentTarget.setSelectionRange(
							e.currentTarget.value.length,
							e.currentTarget.value.length
						)
					}
				/>
			</div>
			<div className='actions'>
				{isReadOnly 
				//Toggle button for ability to update task name
				? (<button className='edit' onClick={() => setIsReadOnly(false)}>Update</button>) 
				//Button for saving updated task name and toggle to prev button with read only mode
				: (<button className='edit'	onClick={() => {handleUpdate(id, titleInput); setIsReadOnly(true)}}>Save</button>)}
				<button className='delete' onClick={() => handleDelete(id)}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default Case
