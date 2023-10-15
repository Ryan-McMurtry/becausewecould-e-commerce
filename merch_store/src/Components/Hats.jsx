import React from "react";
import Card from "./Card";
import useFetch from "./Hooks/useFetch";
import "../Styles/styles.css";

function Hats() {
  const { data, loading, error } = useFetch("/items?populate=*");

  const filterArr = [];
  data.filter((item) => {
    const subCatData = item?.attributes?.sub_categories?.data;
    if (subCatData[0].attributes?.title == "Hats") {
      filterArr.push(item);
    }
  });

  return (
    <>
      <div className="sub_categories">
        <div className="indivCards">
          {loading? "Loading" : filterArr?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Hats;
