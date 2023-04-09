export const checkoutOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHECKOUT_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "CHECKOUT_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
        payment: action.payload,
      };
    case "CHECKOUT_ORDER_FAILED":
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
