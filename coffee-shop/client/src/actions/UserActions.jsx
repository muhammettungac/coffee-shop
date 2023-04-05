import axios from "axios";
export const registerUserAction = (newUser) => async (dispatch) => {
  dispatch({ type: "USER_REGİSTER_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/register",
      newUser
    );

    dispatch({ type: "USER_REGİSTER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_REGİSTER_FAILED", payload: error });
  }
};
