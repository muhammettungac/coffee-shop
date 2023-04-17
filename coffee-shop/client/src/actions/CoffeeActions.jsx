import axios from "axios";
import Swal from "sweetalert2";

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

export const deleteCoffeeAction = (coffeeid) => async (dispatch) => {
  try {
    const result = await Swal.fire({
      title: "Emin misiniz?",
      text: "Bunun geri dönüşü yok!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      axios.post("http://localhost:4000/api/coffees/deleteCoffee", {
        coffeeid,
      });
      Swal.fire("Silindi!", "Kahve başarıyla silinmiştir.", "success");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCoffeeByIdAction = (coffeeid) => async (dispatch) => {
  dispatch({ type: "GET_A_COFFEE_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/coffees/getCoffeeById",
      { coffeeid }
    );
    // const response = await axios.get("http://localhost:6000/getCoffees");
    console.log(response);
    dispatch({ type: "GET_A_COFFEE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_A_COFFEE_FAILED", payload: error });
  }
};

export const editCoffeeAction = (editedCoffee) => async (dispatch) => {
  dispatch({ type: "EDIT_COFFEE_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/coffees/editCoffee",
      { editedCoffee }
    );
    dispatch({ type: "EDIT_COFFEE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "EDIT_COFFEE_FAILED", payload: error });
  }
};

export const addCoffeeAction = (coffee) => async (dispatch) => {
  dispatch({ type: "ADD_COFFEE_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/coffees/addCoffee",
      { coffee }
    );
    dispatch({ type: "ADD_COFFEE_SUCCESS", payload: response.data });
    // window.location.href("/admin/menulist");
  } catch (error) {
    dispatch({ type: "ADD_COFFEE_FAILED", payload: error });
  }
};
