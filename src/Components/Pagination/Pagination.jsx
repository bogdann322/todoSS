import "./Pagination.css"

const Pagination = ({ pageCount, paginate, currentPage }) => {

  const numberArray = Array.from({ length: pageCount }, (_, index) => index + 1);
  return (
    <div className="pagination">
      <button className="pagButton" onClick={()=> paginate(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
      {numberArray.map ( (item) => (
        <button key={item} onClick={()=> paginate(item)} className={currentPage === item ? "current" : "pagButton"}>
          {item}
        </button>
      ))}
      <button className="pagButton" onClick={()=> paginate(currentPage + 1)} disabled={currentPage === pageCount}>Next</button>
    </div>
  );
};

export default Pagination;