import React from "react";
import Card from "./Card";
import useFetch from "./Hooks/useFetch";
import bgVid from "../images/sf3-3rd-strike-yang-stage-hongkong.gif";
import "../Styles/styles.css";

function Home() {
  const { data, loading, error } = useFetch("/items?populate=*");
  const filterArr = new Array();

  data.filter((item) => {
    console.log(item?.attributes);
    if (item?.attributes?.isNew === true) {
      filterArr.push(item);
    }
  });

  return (
    <>

        <div className="container">
          <div className="featured">
            <div className="featuredTitle">
              <h2>Featured:</h2>
            </div>
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
export default Home;
