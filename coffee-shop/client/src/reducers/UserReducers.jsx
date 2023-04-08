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
