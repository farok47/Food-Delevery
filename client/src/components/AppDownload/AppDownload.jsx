import React from "react";
import { assets } from "../../assets/assets";
import "./AppDownload.css";

function AppDownload() {
  return (
    <div className="AppDownload" id="AppDownload">
      <p>
        for better experince download <br /> tomato App
      </p>
      <div className="AppDownload-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
