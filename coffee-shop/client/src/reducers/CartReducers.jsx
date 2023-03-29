export const addToCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        success: true,
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};
