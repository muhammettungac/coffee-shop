import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoffee } from "../actions/CoffeeActions";
import MenuList from "./MenuList";

function HomePage() {
  const coffeeState = useSelector((state) => state.getAllCoffeeReducer);
  const { coffees, loading } = coffeeState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoffee());
  }, []);
  return (
    <div className="container-fluid bg-menu-list">
      <div className="row row-cols-auto">
        {loading ? (
          <div
            className="spinner-border text-light mx-auto p-5 m-5 "
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          coffees.map((deger) => <MenuList key={deger._id} items={deger} />)
        )}
      </div>
    </div>
  );
}

export default HomePage;
