import axios from "axios";
import Swal from "sweetalert2";
export const registerUserAction = (loginUser) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/register",
      loginUser
    );

    dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Kullanıcı Kaydı Başarılı",
      showConfirmButton: false,
      timer: 1500,
    });

    window.location.href = "/login";
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Böyle bir kullanıcı var!",
    });
  }
};

export const loginUserAction = (loginUser) => async (dispatch, getState) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/login",
      loginUser
    );
    console.log("Responce", response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Kullanıcı Girişi Başarılı",
      showConfirmButton: false,
      timer: 1500,
    });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    // console.log(response.data);
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Kullanıcı Girişi Hatalı!",
    });
  }
};

export const userLogoutAction = () => (dispatch) => {
  dispatch({ type: "USER_LOGOUT_REQUEST" });

  try {
    dispatch({ type: "USER_LOGOUT_SUCCESS" });
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGOUT_FAILED" });
  }
};

export const getAllUserAction = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_USER_REQUEST" });
  try {
    const response = await axios.get(
      "http://localhost:4000/api/users/getAllUser"
    );
    dispatch({ type: "GET_ALL_USER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALL_USER_FAILED", payload: error });
  }
};
