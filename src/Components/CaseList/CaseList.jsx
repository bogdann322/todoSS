

import "./CaseList.css"
import Case from '../Case/Case';

const CaseList = ({todolist, handleDelete, handleUpdate}) => {

  return (
    <div className='task-list'>
        <h2>Tasks</h2>
        {todolist.map( (item) => (
          <Case title={item.title} id={item.id} key={item.id} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        ))}
    </div>
  )
}

export default CaseList
