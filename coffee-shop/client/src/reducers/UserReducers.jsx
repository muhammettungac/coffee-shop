export const registerUserReducer = () => (state, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        success: true,
      };
    case "USER_REGISTER_FAILED":
      return {
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const loginUserReducer = (state = { currentUser: null }, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        success: true,
        currentUser: action.payload,
      };
    case "USER_LOGIN_FAILED":
      return {
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const logoutUserReducer = (state = null, action) => {
  switch (action.type) {
    case "USER_LOGOUT_REQUEST":
      return {
        loading: true,
      };
    case "USER_LOGOUT_SUCCESS":
      return {
        success: true,
      };
    case "USER_LOGOUT_FAILED":
      return {
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
