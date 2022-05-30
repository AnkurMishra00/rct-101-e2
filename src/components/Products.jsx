import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination"
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    // <Flex>
    //   <div>
    //     <AddProduct />
        
    //   </div>
    //   <Grid><div><Product /></div></Grid>
    //   <div><Pagination /></div>
    // </Flex>
    <div><Pagination /></div>
  );
};

export default Products;
