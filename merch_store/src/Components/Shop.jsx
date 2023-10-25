import React from "react";
import { useEffect, useState } from "react";
import useFetch from "./Hooks/useFetch";
import MerchList from "./MerchList";

function Shop() {
  const { data, loading, error } = useFetch("/items?populate=*");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  
  return (
    <>
      <div className="container shopList">
        <MerchList currentItems={currentItems} />
      </div>
    </>
  );
}
export default Shop;
