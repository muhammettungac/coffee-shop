import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoffeeByIdAction } from "../actions/CoffeeActions";

function EditMenu() {
  const coffeeid = useParams();
  const dispatch = useDispatch();
  const coffeeState = useSelector((state) => state.getCoffeeByIdReducer);
  const { coffee } = coffeeState;

  const [id, setId] = useState("");
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [smallPrice, setSmallPrice] = useState(0);
  const [mediumPrice, setMediumPrice] = useState(0);
  const [largePrice, setLargePrice] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (coffee) {
      if (coffeeid === coffee._id) {
        setTitle(coffee.ad);
        setType(coffee.kategori);
        setDescription(coffee.desc);
        setPicture(coffee.img);
        setSmallPrice(coffee.fiyat[0]["small"]);
        setMediumPrice(coffee.fiyat[0]["medium"]);
        setLargePrice(coffee.fiyat[0]["mega"]);
      } else {
        dispatch(getCoffeeByIdAction(coffeeid));
      }
    } else {
      dispatch(getCoffeeByIdAction(coffeeid));
    }
  }, [coffee, dispatch]);

  return (
    <div>
      <div className="d-flex flex-row text-center">
        <p className="text-success fw-semibold">Id :</p>{" "}
        <input type="text" value={id} disabled />
      </div>
      <div className="d-flex flex-row">
        <p className="text-success fw-semibold">Picture :</p>{" "}
        <input
          type="text"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
      </div>
      <div className="d-flex flex-row">
        <p className="text-success fw-semibold">Title :</p>{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="d-flex flex-row">
        <p className="text-success fw-semibold">Description :</p>{" "}
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="d-flex flex-row">
        <p className="text-success fw-semibold">Price(Small,Medium,Large) :</p>{" "}
        <input
          type="text"
          value={smallPrice}
          onChange={(e) => setSmallPrice(e.target.value)}
        />
        <input
          type="text"
          value={mediumPrice}
          onChange={(e) => setMediumPrice(e.target.value)}
        />
        <input
          type="text"
          value={largePrice}
          onChange={(e) => setLargePrice(e.target.value)}
        />
      </div>

      <div className="d-flex flex-row">
        <p className="text-success fw-semibold">Type :</p>{" "}
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
    </div>
  );
}

export default EditMenu;
