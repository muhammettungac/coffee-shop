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

export const getAllUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_USER_SUCCESS":
      return {
        loading: false,
        success: true,
        users: action.payload,
      };
    case "GET_ALL_USER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
