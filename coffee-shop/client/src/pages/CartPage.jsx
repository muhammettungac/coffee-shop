import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../actions/CartActions";

function CartPage() {
  const cartState = useSelector((state) => state.addToCartReducer);
  const dispatch = useDispatch();

  const { cartItems } = cartState;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container">
      {cartItems.length == 0 ? (
        <div className="text-center text-success">
          Sepette Ürün Bulunmamaktadır.
        </div>
      ) : (
        cartItems.map((coffees) => (
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
            <div className="col my-auto">
              <p className="text-success fw-normal">
                {coffees.price * coffees.quantity}
              </p>
            </div>

            <div className="col my-auto">
              <div className="row">
                <i
                  class="fa-solid fa-circle-plus text-success"
                  onClick={() =>
                    dispatch(
                      addToCartAction(
                        coffees,
                        Number(coffees.quantity) + 1,
                        coffees.size,
                        coffees.sizeKey
                      )
                    )
                  }
                ></i>
                <p className="text-success fw-normal">{coffees.quantity}</p>
                <i
                  class="fa-solid fa-circle-minus text-success"
                  onClick={() =>
                    dispatch(
                      addToCartAction(
                        coffees,
                        Number(coffees.quantity) - 1,
                        coffees.size,
                        coffees.sizeKey
                      )
                    )
                  }
                ></i>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;
