import React, { useContext } from "react";
import { StoreContex } from "../../globalcontex/GlobalContex";
import "./PlaceOrder.css";

function PlaceOrder() {
  const {getTotlalAmount}=useContext(StoreContex)
  return (
    <form className="placeOrder">
      <div className="placeOrder-left">
        <p className="title">
          Delivery Information
        </p>
        <div className="multy-fields">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>
        <input type="email" placeholder="email" />
        <div className="multy-fields">
          <input type="text" placeholder="country" />
        </div>
        <div className="multy-fields">
            <input type="text" placeholder="city" />
          </div>
          <input type="text" placeholder="phone" />
      </div>
      <div className="placeOrder-right">
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
              <p>${getTotlalAmount()?getTotlalAmount()+2:0}</p>
            </div>
          </div><button>PROCESS TO payment</button>

        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
