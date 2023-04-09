import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { registerUserAction } from "../actions/UserActions";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();

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
    }
  };
  return (
    <div>
      <div className="container ">
        <div className="display-1 text-success"> KAYIT OL </div>
        <div className="w-50 row mx-auto">
          <input
            className=" my-3 text-success "
            type="text"
            placeholder="Kullanıcı adınızı giriniz..."
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className=" my-3 text-success "
            type="text"
            placeholder="Email adresinizi giriniz..."
            onChange={(e) => setMail(e.target.value)}
          />

          <input
            className=" my-3 text-success "
            type="password"
            placeholder="Parolanızı giriniz..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className=" my-3 text-success "
            type="password"
            placeholder="Parolanızı yeniden girin."
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button className=" btn btn-success mb-4 mt-3" onClick={kayitHandler}>
            KAYIT OL
          </button>

          <Link to="/login" className="w-50 mb-4 btn btn-success mx-auto">
            Giriş Yapmak için Tıkla
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
