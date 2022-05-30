import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const ButtonGroup = () => <div />;
  const Select = () => <div />;
  


  
    const [todos, setTodos] = useState([]);
    const [page,setPage] = useState(1);
    const [limit,setLimit] = useState(4)

   
  useEffect(() => {
    fetch(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
.then((r) => r.json())
.then((d) => {
setTodos(d);
});
},[page,limit]);
  return (
    <ButtonGroup>
      
      <Button data-cy="pagination-first-button"><button onClick={() => setPage(setPage=>setPage+1)}>NextPage+</button></Button>
      <Button data-cy="pagination-previous-button">
      <button>Previous</button></Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button">Next</Button>
      <Button data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
