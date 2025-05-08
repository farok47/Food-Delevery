import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContex } from "../../globalcontex/GlobalContex";
import "./FoodItem.css";

function FoodItem({ id, name, description, price, image }) {
  // const [itemCount, setitemCount] = useState(0);
  const { cartItem, AddToCard, RemoveFromCard, url } = useContext(StoreContex);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          src={`${url}/images/${image}`}
          alt={image}
          className="food-item-image"
        />
        {!cartItem?.[id]? (
          <img
            onClick={() => AddToCard(id)}
            src={assets.add_icon_white}
            alt=""
            className="add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => RemoveFromCard(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItem[id] ? cartItem[id] : "0"}</p>
            <img
              onClick={() => AddToCard(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description} </p>
        <p className="food-item-price">${price} </p>
      </div>
    </div>
  );
}

export default FoodItem;
