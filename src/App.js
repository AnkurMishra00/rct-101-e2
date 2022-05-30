import React from "react";
import Products from "./components/Products";
import Pagination from "./components/Pagination";
const App = () => {
  return <div>
    <Pagination />
    <div>1</div>
    <div><Products /></div>
    <Products />
    </div>;
};

export default App;
