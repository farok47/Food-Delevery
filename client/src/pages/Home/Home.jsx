import React, { useState } from "react";
import AppDownload from "../../components/AppDownload/AppDownload";
import ExploreMenu from "../../components/explore-menu/ExploreMenu";
import FoodList from "../../components/FoodList/FoodList";
import Header from "../../components/header/Header";
import "./home.css";

function Home() {
  const [category, setcategory] = useState("all");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setcategory={setcategory} />
      <FoodList category={category} setcategory={setcategory} />
      <AppDownload/>
    </div>
  );
}

export default Home;
