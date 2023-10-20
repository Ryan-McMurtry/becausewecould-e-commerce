import React from "react";
import { useEffect } from "react";
import MerchList from "./MerchList";

function Shop() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <>
      <div className="container shopList">
        <MerchList />
      </div>
    </>
  );
}
export default Shop;
