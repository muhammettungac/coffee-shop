export const registerUserReducer = () => (state, action) => {
  switch (action.type) {
    case "USER_REGİSTER_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGİSTER_SUCCESS":
      return {
        success: true,
      };
    case "USER_REGİSTER_FAILED":
      return {
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
