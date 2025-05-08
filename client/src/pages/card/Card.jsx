import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContex } from "../../globalcontex/GlobalContex";
import "./card.css";

function Card() {
  const { foodList, cartItem, RemoveFromCard, getTotlalAmount,url } =
    useContext(StoreContex);
  let totaly = 0;
  console.log(totaly);
  let navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-items">
        <div className="card-item-title">
          <p>home</p>
          <p>title</p>
          <p>price </p>
          <p>quantity </p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />

        {foodList.map((item,i) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={i}>
                <div key={i} className="card-item-title card-item-item">
                  <img src={`${url}/images/${item.image}`} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p className="cross" onClick={() => RemoveFromCard(item._id)}>
                    x
                  </p>
                </div>
                {/* Total Items: {Object.values(cartItem[item._id]).reduce((sum, qty) => sum + qty, 0)} */}
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="card-bottom">
        <div className="card-total">
          <h2>card totals</h2>
          <div>
            <div className="card-total-details">
              <p>subtotal</p>
              <p>${getTotlalAmount()}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>delivery fee</p>
              <p>${getTotlalAmount()?2:0}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>Total</p>
              <p>${getTotlalAmount()?getTotlalAmount() + 2:0}</p>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCESS TO CHECKOUT
          </button>
        </div>
        <div className="card-promocode">
          <div>
            <p>if you have a promo code enter it here</p>
            <div className="card-promocode-input">
              <input type="text" name="" id="" placeholder="promocode" />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
