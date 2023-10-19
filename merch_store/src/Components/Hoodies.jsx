import React from "react";
import Card from "./Card";
import useFetch from "./Hooks/useFetch";
import "../Styles/styles.scss";

function Hoodies() {
  const { data, loading, error } = useFetch("/items?populate=*");

  const filterArr = [];
  data.filter((item) => {
    const subCatData = item?.attributes?.sub_categories?.data;
    if (subCatData[0].attributes?.title == "Hoodies") {
      filterArr.push(item);
    }
  });

  return (
    <>
      <div className="sub_categories">
        <div>
          <div className="indivCards">
            {loading
              ? "Loading"
              : filterArr?.map((item) => <Card item={item} key={item.id} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hoodies;
