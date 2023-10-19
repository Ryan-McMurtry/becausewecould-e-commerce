import React from "react";
import { useState, useEffect } from "react";
import { ShoppingCart } from "phosphor-react";
import useFetch from "./Hooks/useFetch";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartReducer";

function MerchDetails() {
  const itemId = useLocation().pathname;
  const locationId = itemId.split("/");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `/items/${locationId[2]}?populate=*`
  );
  console.log(data);

  return (
    <div>
      <div>
        <div data-reflow-type="product">
          <div className="reflow-product d-flex">
            <div className="ref-media">
              <div className="ref-preview imageStyle">
                <img
                  className="ref-image active imageBorder"
                  width="60%"
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  data-reflow-preview-type="image"
                />
              </div>
            </div>

            <div className="ref-product-data d-flex flex-column itemColumn">
              <div className="columnSpacing">
                <h2 className="ref-name fontStyle">
                  {data?.attributes?.title}
                </h2>

                <strong className="ref-price ref-on-sale h3">
                  ${data?.attributes?.price}
                </strong>
              </div>
              <span
                data-reflow-type="add-to-cart"
                data-reflow-shoppingcart-url
                data-reflow-addtocart-text
                data-reflow-product="43218622"
                data-reflow-variant="199976733_s"
                data-reflow-quantity="1"
              >
                <div className="ref-product-controls col columnSpacing">
                  <div className="ref-variant">
                    <label className="columnSpacing2">
                      <span className="sizeText">Size</span>
                      <select
                        className="ref-form-control ref-field-variants sizeSelect"
                        name="variant-state"
                        required
                      >
                        <option value="199976733_s">S</option>
                        <option value="199976733_m">M</option>
                        <option value="199976733_l">L</option>
                      </select>
                    </label>
                  </div>
                  <span
                    data-reflow-variant="199976733_s"
                    data-reflow-product="43218622"
                    data-reflow-max-qty="999"
                    data-reflow-quantity="1"
                  >
                    <div className="ref-quantity-widget columnSpacing2">
                      <input type="text" value={quantity} />
                      <div className="d-flex row justify-content-center incrementBtn">
                        <div className="ref-decrease">
                          <button
                            className="btnFont"
                            onClick={() =>
                              setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                            }
                          >
                            -
                          </button>
                        </div>
                        <div className="ref-increase">
                          <button
                            className="btnFont"
                            onClick={() => setQuantity((prev) => prev + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </span>

                  <button
                    className="btn btn-secondary mx-1 addToCartBtn"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: data.id,
                          title: data.attributes.title,
                          desc: data.attributes.description,
                          price: data.attributes.price,
                          img: data.attributes.img.data.attributes.url,
                          quantity,
                        })
                      )
                    }
                  >
                    Add to Cart <ShoppingCart />
                  </button>
                </div>
              </span>
              <div className="ref-description itemPageFont">
                <p>{data?.attributes?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchDetails;
