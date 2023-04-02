export const addToCartAction =
  (items, miktar, ozellik, ozellikKey) => (dispatch, getState) => {
    var cartItem = {
      title: items.title,
      type: items.type,
      subType: items.subType,
      size: ozellik,
      sizeKey: ozellikKey,
      price: items.price[ozellikKey],
      quantity: miktar,
      description: items.description,
      picture: items.picture,
    };
    if (miktar < 1) {
      cartItem.quantity = 1;
    }

    if (miktar > 0) {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });

      const cartItems = getState().addToCartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };
