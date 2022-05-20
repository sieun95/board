import React, { useState } from "react"; 
import {useNavigate} from "react-router-dom"
import './Paging.css'; 
import Pagination from "react-js-pagination";


const Paging = () => {
  let navigate = useNavigate(); 
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => { 
    setPage(page); 
    console.log(page)
    navigate(`/tavern/page/${page}`);
  }; 
  return (
    <Pagination 
    activePage={page}
    itemsCountPerPage={10}
    totalItemsCount={21}
    pageRangeDisplayed={5}
    prevPageText={"‹"}
    nextPageText={"›"}
    onChange={handlePageChange} 
    />
  ); 
}; 
  export default Paging;

  