import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCoffeeAction } from "../actions/CoffeeActions";

function AddMenu() {
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [smallPrice, setSmallPrice] = useState(0);
  const [mediumPrice, setMediumPrice] = useState(0);
  const [largePrice, setLargePrice] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    const coffee = {
      title: title,
      type: type,
      subType: subType,
      description: description,
      picture: picture,
      price: [
        parseInt(smallPrice),
        parseInt(mediumPrice),
        parseInt(largePrice),
      ],
      sizes: ["small", "medium", "large"],
    };

    dispatch(addCoffeeAction(coffee));
    navigate("admin/menulist");
  };

  return (
    <div>
      <form className="w-75 m-auto abz" onSubmit={formHandler}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Menü Adını Giriniz"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Type Giriniz"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="SubType Giriniz"
          value={subType}
          onChange={(e) => setSubType(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Small Boy Fiyatını Giriniz"
          value={smallPrice}
          onChange={(e) => setSmallPrice(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Medium Boy Fiyatını  Giriniz"
          value={mediumPrice}
          onChange={(e) => setMediumPrice(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Mega Boy Fiyatını  Giriniz"
          value={largePrice}
          onChange={(e) => setLargePrice(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Açıklama Giriniz"
          className="form-control mb-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="url"
          className="form-control mb-2"
          placeholder="Fotoğraf Linkini Giriniz"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />

        <button type="submit" className="btn btn-success w-50 mb-5">
          KAYDET
        </button>
      </form>
    </div>
  );
}

export default AddMenu;
