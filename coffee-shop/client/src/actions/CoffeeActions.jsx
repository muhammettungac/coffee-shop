import axios from "axios";

export const getAllCoffee = () => async (dispatch) => {
  dispatch({ type: "GET_COFFEE_REQUEST" });

  try {
    const response = await axios.get(
      "http://localhost:4000/api/coffees/getCoffees"
    );
    // const response = await axios.get("http://localhost:6000/getCoffees");

    dispatch({ type: "GET_COFFEE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_COFFEE_FAILED", payload: error });
  }
};
