import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { loginUserAction } from "../actions/UserActions";

function LoginPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    if (mail == "" || password == "") {
      Swal.fire("Eksik alanları doldurunuz.!");
    } else {
      const loginUser = {
        mail: mail,
        password: password,
      };
      // console.log(login);
      dispatch(loginUserAction(loginUser));
    }
  };
  return (
    <div>
      <div className="container ">
        <div className="w-50 row mx-auto">
          <input
            className=" my-3 "
            type="text"
            placeholder="Email adresinizi giriniz..."
            onChange={(e) => setMail(e.target.value)}
          />

          <input
            className=" my-3 "
            type="password"
            placeholder="Parolanızı giriniz..."
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className=" btn btn-success mb-4 mt-3" onClick={loginHandler}>
            GİRİŞ
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
