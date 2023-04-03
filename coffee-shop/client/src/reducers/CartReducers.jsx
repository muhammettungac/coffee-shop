export const addToCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      var isTrue = state.cartItems.find(
        (item) => item._id == action.payload._id
      );

      if (isTrue) {
        return {
          success: true,
          ...state,
          cartItems: state.cartItems.map((data) =>
            data._id === action.payload._id ? action.payload : data
          ),
        };
      } else {
        return {
          success: true,
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    default:
      return state;
  }
};
