import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { registerUserAction } from "../actions/UserActions";
import { registerUserReducer } from "../reducers/UserReducers";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.registerUserReducer);
  const { success, error, loading } = userState;

  const kayitHandler = (e) => {
    e.preventDefault();
    if (email == "" || name == "" || pass == "" || pass2 == "") {
      Swal.fire("Eksik alanları doldurunuz.!");
    } else if (pass !== pass2) {
      Swal.fire("Şifreler uyuşmamaktadır.!");
    } else {
      const newUser = {
        username: name,
        mail: email,
        pass: pass,
      };
      dispatch(registerUserAction(newUser));
      if (success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Kullanıcı Kaydı Başarılı",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Böyle bir kullanıcı var!",
        });
      }
    }
  };
  return (
    <div>
      <div className="container ">
        <form>
          <div className="w-50 row mx-auto">
            <input
              className=" my-3 "
              type="text"
              placeholder="Kullanıcı adınızı giriniz..."
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className=" my-3 "
              type="text"
              placeholder="Email adresinizi giriniz..."
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className=" my-3 "
              type="password"
              placeholder="Parolanızı giriniz..."
              onChange={(e) => setPass(e.target.value)}
            />
            <input
              className=" my-3 "
              type="password"
              placeholder="Parolanızı yeniden girin."
              onChange={(e) => setPass2(e.target.value)}
            />
            <button
              className=" btn btn-success mb-4 mt-3"
              onClick={kayitHandler}
            >
              KAYIT OL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
