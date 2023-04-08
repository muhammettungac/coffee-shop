import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { registerUserAction } from "../actions/UserActions";

function RegisterPage() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.registerUserReducer);
  const { success, error, loading } = userState;

  const kayitHandler = () => {
    if (name == "" || mail == "" || password == "" || password2 == "") {
      Swal.fire("Eksik alanları doldurunuz.!");
    } else if (password !== password2) {
      Swal.fire("Şifreler uyuşmamaktadır.!");
    } else {
      const newUser = {
        name: name,
        mail: mail,
        password: password,
      };
      dispatch(registerUserAction(newUser));
      console.log(newUser);
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
            onChange={(e) => setMail(e.target.value)}
          />

          <input
            className=" my-3 "
            type="password"
            placeholder="Parolanızı giriniz..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className=" my-3 "
            type="password"
            placeholder="Parolanızı yeniden girin."
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button className=" btn btn-success mb-4 mt-3" onClick={kayitHandler}>
            KAYIT OL
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
