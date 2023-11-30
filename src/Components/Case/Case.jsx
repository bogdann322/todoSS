import "./Case.css"

const Case  = ({title, id, handleDelete, handleUpdate}) => {
    return(
        <div className="task">
            <div className="content">
                <input type="text" className="text" value={title} readOnly />
            </div>
            <div className="actions">
                <button className="edit" onClick = {() => handleUpdate(id, prompt('Enter new text:'))}>Update</button>
                <button className="delete" onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Case

