import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";


const RelatedProducts = ({ currentItems }) => {
    return (

        <div className="relatedCards">
          {currentItems?.map((item) => (
            <div
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Card item={item} key={item.id} />
            </div>
          ))}
        </div>
 
    );
}

export default RelatedProducts;