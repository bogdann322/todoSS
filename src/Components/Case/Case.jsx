import "./Case.css"

const Case  = ({title, id}) => {
    return(
        <div className="task">
            <div className="content">
                <input type="text" className="text" value={title} id="input2" readOnly />
            </div>
            <div className="actions">
                <button className="edit" onclick="updateText('taskEdit2','input2')" id="taskEdit2">Update</button>
                <button className="delete" onclick="deleteItem('task2')">Delete</button>
            </div>
        </div>
    )
}

export default Case

