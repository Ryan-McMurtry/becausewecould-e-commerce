import React from "react";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../Redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../makeRequests";
import { loadStripe } from "@stripe/stripe-js";



function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    items.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const resetHandler = (event) => {
    event.preventDefault();
    const controller = new AbortController();
    const confirmation = window.confirm(
      "Are you sure you want to reset your cart?"
    );

    if (confirmation) {
      dispatch(resetCart(), controller.signal);
    }

    return () => controller.abort();
  };

  const stripePromise = loadStripe(
    "pk_test_51NmEGSBocVtywriia3FsklGNP6BCgBy50jQs9iRNHax4XqVvtlFP6KdMZbbVFdEfINVpZ3G4SHOEiTCxKzlxJ40300CBWrPNW8"
  );

  const handlePayment = async() => {
    try{
      const stripe = await stripePromise;
      
      const res = await makeRequest.post("/orders", {
        items,
      });
     
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch(err){
      console.log(err);
    }
  }


  if (items.length > 0) {
    return (
      <div className="cart">
        <div className="cartContent">
          <h1>Items in your cart</h1>
          {items?.map((item) => (
            <div className="cartItem" key={item.id}>
              <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
              <div className="details">
                <h3>{item.title}</h3>
                <div className="price">
                  {item.quantity} x ${item.price}
                </div>
              </div>
              <button
                className="delete"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>
            </div>
          ))}

          <div className="total">
            <h3>SUBTOTAL</h3>
            <h4>${totalPrice()}</h4>
          </div>

          <div className="cartButton">
            <button className="btnMargin" onClick={handlePayment}>Checkout</button>
            <button className="reset btnMargin" onClick={resetHandler}>
              Reset Cart
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h1 className="emptyText">Your cart is empty</h1>
      </div>
    );
  }
}

export default Cart;
