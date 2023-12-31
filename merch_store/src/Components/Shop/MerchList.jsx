import React from "react";
import Card from "../Layout/Card";
import useFetch from "../Hooks/useFetch";
import "../../Styles/styles.scss";

function Body({ currentItems }) {
  const { loading } = useFetch("/items?populate=*");

  return (
    <>
      <div>
        <div className="indivCards">
          {loading
            ? "Loading..."
            : currentItems?.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </>
  );
}

export default Body;
