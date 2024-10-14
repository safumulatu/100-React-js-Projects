import axios from "axios";

import "./Style.css";
import { useState } from "react";
import { useEffect } from "react";

function Meals() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res.data.meals);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt="starmealpoto" />
        <div className="content">
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </div>
      </section>
    );
  });

  return <div className="items-container">{itemslist}</div>;
}
export default Meals;
