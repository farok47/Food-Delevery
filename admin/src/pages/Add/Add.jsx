import React, { useRef, useState } from "react";
import { assets } from "../../assets/assets";
import "./Add.css";
import axios from "axios";

function Add() {
  const url = "http://localhost:5000";
  const ref = useRef();
  const [image, setimage] = useState(false);
  const [data, setdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  function onchangehandler(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  async function handlesubmit(e) {
    e.preventDefault();
    const formDAta = new FormData();
    formDAta.append("name", data.name);
    formDAta.append("description", data.description);
    formDAta.append("price", Number(data.price));
    formDAta.append("category", data.category);
    formDAta.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formDAta);

    if (response.data) {
      console.log(response.data)
    setdata({
      name: "",
      description: "",
      price: "",
      category: "Salad",
    });
    setimage(null);
    if (ref.current) {
      ref.current.value = "";
    }
  }}
  

  return (
    <div className="add">
      <form onSubmit={handlesubmit} className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            ref={ref}
            onChange={(e) => setimage(e.target.files[0])}
            type="file"
            id="image"
            required
            hidden
          />
        </div>
        <div className="add-product-name flex-col">
          <p>product name</p>
          <input
            onChange={onchangehandler}
            type="text"
            value={data.name}
            name="name"
            placeholder="type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>product description</p>
          <textarea
            onChange={onchangehandler}
            name="description"
            rows="6"
            required
            placeholder="write content here"
            value={data.description}
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>product category</p>
            <select
              onChange={onchangehandler}
              name="category"
              value={data.category}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>product price</p>
            <input
              onChange={onchangehandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
