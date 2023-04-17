import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoffeeAction, getAllCoffee } from "../actions/CoffeeActions";
import { Link } from "react-router-dom";

function MenusList() {
  const coffeeState = useSelector((state) => state.getAllCoffeeReducer);
  const { coffees } = coffeeState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoffee());
  }, [coffees]);
  return (
    <div>
      <div className="container ">
        <table className="table table-hovered table-success w-100 mx-auto mt-3">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Type</th>
              <th>Description</th>
              <th>Price</th>
              <th>Sizes</th>
              <th>Edit or Delete</th>
            </tr>
          </thead>
          <tbody>
            {coffees.map((coffee) => (
              <tr key={coffee._id}>
                <td>{coffee._id}</td>
                <td>
                  <img className="w-100" src={coffee.picture} alt="" />
                </td>
                <td>{coffee.title}</td>
                <td>{coffee.type} </td>
                <td>{coffee.description}</td>
                <td>
                  Small: {coffee.price[0]}₺ <br />
                  Medium: {coffee.price[1]}₺ <br />
                  Large: {coffee.price[2]}₺ <br />
                </td>

                <td>small,medium,large </td>
                <td>
                  <Link to={`/admin/editmenu/${coffee._id}`}>
                    <i className="fa-solid fa-pen-to-square text-info mx-2" />
                  </Link>

                  <i
                    className="fa-solid fa-trash text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(deleteCoffeeAction(coffee._id))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenusList;
