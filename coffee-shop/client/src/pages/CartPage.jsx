import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../actions/CartActions";
import CheckoutPage from "./CheckoutPage";

function CartPage() {
  const cartState = useSelector((state) => state.addToCartReducer);
  const dispatch = useDispatch();

  const { cartItems } = cartState;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.prices, 0);

  // cartItems.map((data) => totalPrice);
  return (
    <div className="container">
      {cartItems.length == 0 ? (
        <div className="text-center text-success">
          Sepette Ürün Bulunmamaktadır.
        </div>
      ) : (
        <>
          <div className="row">
            <p className="text-success">Toplam : {totalPrice} ₺ </p>
          </div>
          <CheckoutPage toplamfiyat={totalPrice} />

          {cartItems.map((coffees) => (
            <div
              className="row shadow border border-success m-2 p-0 rounded-5"
              key={coffees._id}
            >
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
                <p className="text-success fw-semibold">
                  {coffees.ozellik.toUpperCase()}
                </p>
              </div>
              <div className="col my-auto">
                <p className="text-success fw-normal">{coffees.description}</p>
              </div>
              <div className="col my-auto">
                <p className="text-success fw-normal">{coffees.price} ₺</p>
              </div>

              <div className="col my-auto">
                <div className="row">
                  <i
                    className="fa-solid fa-circle-plus text-success"
                    onClick={() => {
                      dispatch(
                        addToCartAction(
                          coffees,
                          Number(coffees.miktar) + 1,
                          coffees.ozellik,
                          coffees.price
                        )
                      );
                    }}
                  />
                  <span className="text-success fw-normal">
                    {coffees.miktar}
                  </span>
                  <i
                    className="fa-solid fa-circle-minus text-success"
                    onClick={() => {
                      dispatch(
                        addToCartAction(
                          coffees,
                          Number(coffees.miktar) - 1,
                          coffees.ozellik,
                          coffees.price
                        )
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default CartPage;
