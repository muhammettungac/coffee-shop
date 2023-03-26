import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoffee } from "../actions/CoffeeActions";

function HomePage() {
  const coffeeState = useSelector((state) => state.getAllCoffeeReducer);
  const { coffees } = coffeeState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoffee());
  }, []);
  return (
    <div>
      <div className="row">
        {coffees.map((deger) => (
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={deger.picture} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{deger.title}</h5>
                <p className="card-text">{deger.description}</p>
                <p className="card-text">{deger.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
