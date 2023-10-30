import React from "react";
import Card from "./Card";



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