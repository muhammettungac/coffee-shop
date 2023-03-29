import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../actions/CartActions";

function MenuList({ items }) {
  const dispatch = useDispatch();
  const [ozellik, setOzellik] = useState("small");
  const [fiyat, setFiyat] = useState(items.price[0]);
  const [miktar, setMiktar] = useState(1);
  const [ozellikKey, setOzellikKey] = useState(0);

  const changeFunc = (e) => {
    setOzellik(e.target.value);
    setOzellikKey(items.sizes.indexOf(e.target.value));
  };

  const adetHandler = (e) => {
    if (e.target.value < 1) {
      setMiktar(1);
    } else {
      setMiktar(e.target.value);
    }
  };
  const addToCardFunc = () => {
    dispatch(addToCartAction(items, miktar, ozellik, ozellikKey));
  };

  return (
    <div className="mx-auto p-2">
      <div
        key={items._id}
        className="card shadow mx-auto rounded-4"
        style={{
          width: "25rem",
          padding: "15px",
          border: "1px solid rgb(30, 59, 49)",
        }}
      >
        <img src={items.picture} className="card-img-top rounded-4" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">{items.title}...</h5>
          <p className="card-text">{items.description.slice(0, 40)}...</p>
          <div className="row w-100">
            <div className="col-6">
              <select
                name=""
                id=""
                className="form-select2 mb-3"
                onChange={changeFunc}
              >
                {items.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <input
                className="form-select2"
                type="number"
                value={miktar}
                onChange={adetHandler}
              ></input>
            </div>
          </div>

          <p className="card-text">{items.price[ozellikKey] * miktar} ₺</p>
          <button
            type="button"
            className="btn btn-success"
            onClick={addToCardFunc}
          >
            SEPETE EKLE
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
