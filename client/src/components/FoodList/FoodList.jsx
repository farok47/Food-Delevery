import React, { useContext } from "react";
import { StoreContex } from "../../globalcontex/GlobalContex";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodList.css";

function FoodList({ category }) {
  const { foodList } = useContext(StoreContex);
  return (
    <div className="food_list" id="food_list">
      <h2>top dishes near you</h2>
      <div className="food_listItem">
        {foodList
          ? foodList.map((item, index) => {
              if (category === "all" || category === item.category) {
                return (
                  <FoodItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                );
              }
            })
          : ""}
      </div>
    </div>
  );
}

export default FoodList;
