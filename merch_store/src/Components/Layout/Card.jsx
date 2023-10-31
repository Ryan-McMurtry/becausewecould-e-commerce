import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/styles.scss";

const Card = ({ item }) => {
  return (
    <div className="cardStyle fontStyle">
      <Link className="link" to={`/item/${item.id}`}>
        <div className="card">
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img.data.attributes?.url
            }
            style={{
              cursor: "pointer",
            }}
            alt=""
          />
          <div className="priceAndTitle">
            <h2 className="itemFont">{item?.attributes?.title}</h2>
            <div className="prices">
              <h3>${item?.attributes?.price}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
