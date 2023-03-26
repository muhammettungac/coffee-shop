export const getAllCoffeeReducer = (state = { coffees: [] }, action) => {
  switch (action.type) {
    case "GET_COFFEE_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_COFFEE_SUCCESS":
      return {
        loading: false,
        coffees: action.payload,
      };

    case "GET_COFFEE_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
