export const addToCartAction =
  (items, miktar, ozellik, price) => (dispatch, getState) => {
    var cartItem = {
      _id: items._id,
      title: items.title,
      type: items.type,
      subType: items.subType,
      ozellik: ozellik,
      miktar: miktar,
      price: price,
      prices: price * miktar,
      description: items.description,
      picture: items.picture,
    };
    console.log(cartItem);
    if (miktar > 0) {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });

      const cartItems = getState().addToCartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };
