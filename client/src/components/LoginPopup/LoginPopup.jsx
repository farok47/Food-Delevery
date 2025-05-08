import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContex } from "../../globalcontex/GlobalContex";
import "./LoginPopup.css";
import axios from "axios";

function LoginPopup({ setshowlogin }) {
  let { url, setToken } = useContext(StoreContex);
  const [currstate, setcurrstate] = useState("login");
  const [data, setdata] = useState({
    name: "",
    password: "",
    email: "",
  });
  function handlechange(e) {
    setdata((data) => ({ ...data, [e.target.name]: e.target.value }));
  }
  async function onlogin(e) {
    e.preventDefault();
    let newurl = url;
    if (currstate === "login") {
      newurl += "/api/user/login";
    } else newurl += "/api/user/register";
    const response = await axios.post(newurl, data);
    console.log(response);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setshowlogin(false);
    }
  }
  

  return (
    <div className="LoginPopup">
      <form onSubmit={onlogin} className="LoginPopup-container">
        <div className="LoginPopup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="LoginPopup-inputs">
          {currstate === "sign up" ? (
            <input
              onChange={handlechange}
              name="name"
              value={data.name}
              type="text"
              placeholder="your name"
              required
            />
          ) : (
            <></>
          )}

          <input
            onChange={handlechange}
            name="email"
            value={data.email}
            type="email"
            placeholder="your email"
            required
          />
          <input
            onChange={handlechange}
            name="password"
            value={data.password}
            type="password"
            placeholder="your password"
            required
          />
        </div>
        <button type="submit">
          {currstate === "sign up" ? "create account" : "login"}
        </button>
        <div className="LoginPopup-condition">
          <input type="checkbox" required />
          <p>i agree to the terms of use and privacy policy</p>
        </div>
        {currstate === "login" ? (
          <p>
            create a new account ?
            <span onClick={() => setcurrstate("sign up")}>click here</span>
          </p>
        ) : (
          <p>
            already have an account ?
            <span onClick={() => setcurrstate("login")}>login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
