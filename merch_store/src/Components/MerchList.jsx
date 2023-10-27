import React from "react";
import Card from "./Card";
import useFetch from "./Hooks/useFetch";
import "../Styles/styles.scss";

function Body({ currentItems }){

  const { allData, loading } = useFetch("/items?populate=*");


    return (
      <>
        <div>
          <div className="indivCards">
            {loading ? "Loading..." : currentItems?.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </>
    );
}

export default Body;