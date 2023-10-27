import React, { useEffect } from "react";
import useFetch from "./Hooks/useFetch";
import MerchDetails from "./ItemLayout";
import "../Styles/styles.scss";

const ItemPage = () => {
  const { data, loading, error } = useFetch("/items?populate=*");

  const prodData = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MerchDetails prodData={prodData} />
    </div>
  );
};

export default ItemPage;
