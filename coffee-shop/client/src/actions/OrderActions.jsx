import axios from "axios";

export const checkoutOrderAction =
  (token, toplamfiyat) => async (dispatch, getState) => {
    dispatch({ type: "CHECKOUT_ORDER_REQUEST" });
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().addToCartReducer.cartItems;

    try {
      const response = await axios.post(
        "http://localhost:4000/api/orders/checkout",
        { token, currentUser, toplamfiyat, cartItems }
      );

      dispatch({ type: "CHECKOUT_ORDER_SUCCESS", payload: response.data });
      localStorage.removeItem("cartItems");
      window.location.href = "/";
    } catch (error) {
      dispatch({ type: "CHECKOUT_ORDER_FAILED", payload: error });
      console.log(error);
    }
  };
