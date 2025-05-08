import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import {toast} from "react-toastify"

function List() {
  const url = "http://localhost:5000";
  const [list, setlist] = useState([]);

  async function fetchlist() {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setlist(response.data.data);
    }
  }

  useEffect(() => {
    fetchlist();
  }, []);

  async function handleremove(id) {
    const response=await axios.delete(`${url}/api/food/remove/${id}`);
      fetchlist()
      console.log(response)

      if(response){
        toast.success('success')
      }else
      toast.error("Error")
    
  }
  return (
    <div className="list add flex-col">
      <p>all food list </p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list
          ? list.map((item, index) => {
              return (
                <div key={index} className="list-table-format">
                  <img src={`${url}/images/${item.image}`} alt="" />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>{item.price}</p>
                  <p
                    onClick={() => handleremove(item._id)}
                    style={{ cursor: "pointer" }}
                  >
                    x
                  </p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default List;
