import React from "react";
import {useEffect} from "react";
import Card from "./Card";
import useFetch from "./Hooks/useFetch";
import Slider from "./Slider";
import ReactVideoPlayer from "./ReactVideoPlayer";

import "../Styles/styles.scss";

function Home() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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
      <div>
        <Slider />
      </div>

      <div className="container featuredContainer">
        <div className="featured">
          <div className="featuredTitle">
            <h2>Featured:</h2>
          </div>
          <div className="indivCards ftMargin">
            {loading
              ? "Loading"
              : filterArr?.map((item) => <Card item={item} key={item.id} />)}
          </div>
        </div>
      </div>

      <div>
        <ReactVideoPlayer />
      </div>
    </>
  );
}
export default Home;
