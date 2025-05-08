import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { food_list } from "../assets/assets";

export const StoreContex = createContext(null);

function GlobalContex({ children }) {
  const [foodList, setfoodList] = useState([]);
  const [cartItem, setcartItem] = useState({});
  const [token, setToken] = useState("");
  const url = "http://localhost:5000";

  async function AddToCard(ItemId) {
    if (!cartItem[ItemId]) {
      setcartItem((prev) => ({ ...prev, [ItemId]: 1 }));
    } else {
      setcartItem((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    }
    if (token) {
      await axios.post(
        `${url}/api/card/add`,
        { ItemId },
        { headers: { token } }
      );
    }
  }
  async function RemoveFromCard(ItemId) {
    setcartItem((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
    if (token) {
      await axios.post(`${url}/api/card/remove`, {
        headers: { token },
        data: { ItemId }, // <-- body goes inside `data`
      });
    }
  }

  async function loadcartData(token){
    try {
      const response = await axios.post(`${url}/api/card/get`,{}, {
        headers: { token }
      });
      setcartItem(response.data.cartData);
    } catch (error) {
      console.error("Failed to load cart data", error);
    }

  }

  function getTotlalAmount() {
    let totalamount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let product = foodList.find((product) => product._id === item);
        totalamount += cartItem[item] * product?.price;
      }
    }
    return totalamount;
  }

  async function fetchdata() {
    const response = await axios.get(`${url}/api/food/list`);
    if (response) {
      setfoodList(response.data.data);
    }
  }
   useEffect(() => {
    fetchdata();
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      loadcartData(localStorage.getItem("token"))
    }
    
  }, []);
  const constexvalue = {
    food_list,
    cartItem,
    AddToCard,
    RemoveFromCard,
    setcartItem,
    getTotlalAmount,
    url,
    token,
    setToken,
    foodList,
  };

  return (
    <StoreContex.Provider value={constexvalue}>{children}</StoreContex.Provider>
  );
}

export default GlobalContex;
