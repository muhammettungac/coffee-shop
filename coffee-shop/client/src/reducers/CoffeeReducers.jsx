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

export const getCoffeeByIdReducer = (state = { coffee: null }, action) => {
  switch (action.type) {
    case "GET_A_COFFEE_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_A_COFFEE_SUCCESS":
      return {
        loading: false,
        success: true,
        coffee: action.payload,
      };

    case "GET_A_COFFEE_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const editCoffeeReducer = (state = { coffee: {} }, action) => {
  switch (action.type) {
    case "EDIT_COFFEE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "EDIT_COFFEE_SUCCESS":
      return {
        loading: false,
        success: true,
        coffee: action.payload,
      };
    case "EDIT_COFFEE_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const addCoffeeReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_COFFEE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_COFFEE_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_COFFEE_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
