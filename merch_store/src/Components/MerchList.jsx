import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Card from "./Card"
import useFetch from "./Hooks/useFetch";
import "../Styles/styles.scss"

function Body(){

  const {data, loading, error} = useFetch("/items?populate=*");
  console.log(data)

    return (
      <>
        <div>
          <div className="indivCards">
            {loading ? "Loading..." : data?.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </>
    );
}

export default Body;