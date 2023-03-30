import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import addToCartReducer from "../reducers/CartReducers";

function CartPage() {
  const cartState = useSelector((state) => state.addToCartReducer);

  const { cartItems } = cartState;

  return (
    <div className="container">
      {cartItems.map((coffees) => (
        <div className="row shadow border border-success m-2 p-0 rounded-5">
          <div className="col mx-auto p-1 ">
            <img
              className="rounded-4"
              src={coffees.picture}
              alt=""
              style={{ width: "200px" }}
            />
          </div>
          <div className="col my-auto ">
            <p className="text-success fw-bold">{coffees.title} </p>
          </div>
          <div className="col my-auto">
            <p className="text-success fw-semibold">{coffees.size}</p>
          </div>
          <div className="col my-auto">
            <p className="text-success fw-normal">{coffees.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
