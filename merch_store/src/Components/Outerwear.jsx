import React from "react";
import Card from "./Card";
import useFetch from "./Hooks/useFetch";
import "../Styles/styles.css";

function Outerwear() {
  const { data, loading, error } = useFetch("/items?populate=*");

  const filterArr = [];
  data.filter((item) => {
    const subCatData = item?.attributes?.sub_categories?.data;
    if (subCatData[0].attributes?.title == "Outerwear") {
      filterArr.push(item);
    }
  });

  return (
    <>
      <div className="sub_categories">
        <div>
          <div className="indivCards">
            {filterArr?.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Outerwear;
