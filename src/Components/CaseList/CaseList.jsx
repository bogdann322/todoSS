import React, { useState } from 'react';


import "./CaseList.css"
import Case from '../Case/Case';
import Pagination from '../Pagination/Pagination';

const CaseList = ({todolist, handleDelete, handleUpdate}) => {
  //State for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculation of indices for the current page
  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = todolist.slice(indexOfFirstItem, indexOfLastItem);

  //Calculation totalPages page
  const pageCount = todolist.length / 10
  
  //Function for changing page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='task-list'>
        <h2>Tasks</h2>
        {currentItems.map( (item) => (
          <Case title={item.title} id={item.id} key={item.id} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        ))}
        <Pagination pageCount={pageCount} paginate={paginate} currentPage={currentPage}/>
    </div>
  )
}

export default CaseList
