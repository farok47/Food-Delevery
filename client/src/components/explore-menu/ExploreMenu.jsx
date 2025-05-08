import React from "react";
import "./exploreMenu.css";
import { menu_list } from "../../assets/assets";

function ExploreMenu({category,setcategory}) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>explore our menu</h1>
      <p className="explore-menu-text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div className="explore-menu-list-item" key={index}>
              <img className={category===item.menu_name?"active":""}src={item.menu_image} alt={item.menu_image} onClick={()=>{setcategory(category===item.menu_name?"all":item.menu_name)}} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
