export const addToCartAction =
  (items, miktar, ozellik, ozellikKey) => (dispatch, getState) => {
    var cartItem = {
      title: items.title,
      type: items.type,
      subType: items.subType,
      size: ozellik,
      price: items.price[ozellikKey],
      quantity: miktar,
      description: items.description,
      picture: items.picture,
    };
    if (miktar < 0) {
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });

      const cartItems = getState().addToCartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };
