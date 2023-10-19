import React from "react";
import { useEffect } from "react";
import Card from "./Card";
import useFetch from "./Hooks/useFetch";
import "../Styles/styles.scss";

function Outerwear() {
  const { data, loading, error } = useFetch("/items?populate=*");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            {loading
              ? "Loading"
              : filterArr?.map((item) => <Card item={item} key={item.id} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Outerwear;
