import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCoffee } from "../actions/CoffeeActions";

function MenuList({ items }) {
  const dispatch = useDispatch();

  const [ozellik, setOzellik] = useState("small");
  const [fiyat, setFiyat] = useState("");

  const changeFunc = (e) => {
    setOzellik(e.target.value);
    var deger1 = items.sizes.indexOf(e.target.value);

    console.log(deger1);
  };
  // const addToCardFunc = () => {
  //   dispatch(addToCartAction(items,miktar,ozellik))
  // };

  return (
    <div className="mx-auto p-2">
      <div
        className="card shadow mx-auto rounded-4"
        style={{ width: "25rem", padding: "15px" }}
      >
        <img src={items.picture} className="card-img-top rounded-4" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{items.title}...</h5>
          <p className="card-text">{items.description.slice(0, 40)}...</p>
          <select
            name=""
            id=""
            className="form-select mb-3"
            onChange={(e) => changeFunc(e)}
          >
            {items.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
          <p className="card-text">{fiyat} ₺</p>
          <button type="button" className="btn btn-success">
            SEPETE EKLE
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
