import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../actions/CartActions";
import Modal from "react-bootstrap/Modal";

function MenuList({ items }) {
  /*Modal için UseStateler*/
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [ozellik, setOzellik] = useState("small");
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
        <img
          src={items.picture}
          className="card-img-top rounded-4"
          alt="..."
          onClick={handleShow}
        />
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
      {/* Modal Başlangıcı */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{items.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={items.picture} style={{ height: "250px" }} />
          <h4>Kategori: {items.type}</h4>
          <h6>Alt Kategori : {items.subType}</h6>
          <p>{items.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success w-100" onClick={handleClose}>
            KAPAT
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MenuList;
