import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import { checkoutOrderAction } from "../actions/OrderActions";

function CheckoutPage({ toplamfiyat }) {
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    console.log(token);
    dispatch(checkoutOrderAction(token, toplamfiyat));
  };

  return (
    <div>
      <StripeCheckout
        amount={toplamfiyat * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        stripeKey="pk_test_51MooauCHYN1T3yAzP5iGiLMRlVipuhy4xf1d5WqyxuX1ROcX71L8kifda1JvXIBzUwSimTJgxHi8C1WT4ywzVsXo00N8rebybO"
        currency="TRY"
      >
        <button className="btn btn-outline-danger mb-3 w-25">HEMEN ÖDE!</button>
      </StripeCheckout>
    </div>
  );
}

export default CheckoutPage;
