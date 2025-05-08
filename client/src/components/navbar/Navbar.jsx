import React, { useContext, useState } from 'react'
import "./navbar.css"
import {assets}from "../../assets/assets"
import { Link, useNavigate } from 'react-router-dom'
import { StoreContex } from '../../globalcontex/GlobalContex'

function Navbar({setshowlogin}) {
  const [menu,setmenu]=useState("")
  const {getTotlalAmount,token,setToken}=useContext(StoreContex)
  const navigate=useNavigate()



function logout(){
  localStorage.removeItem("token")
  setToken("")
  navigate("/")
}

   return (
    <div className='navbar'>
      <Link to={"/"}><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to={"/"} className={menu==="home"?"active":""} onClick={()=>setmenu("home")}>home</Link>
        <a href='#explore-menu' className={menu==="menu"?"active":""} onClick={()=>setmenu("menu")}>menu</a>
        <a href='#AppDownload' className={menu==="mobile-app"?"active":""} onClick={()=>setmenu("mobile-app")}>mobile-app</a>
        <a href='#footer' className={menu==="contact us"?"active":""} onClick={()=>setmenu("contact us")}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={"/card"}>< img src={assets.basket_icon} alt=""/></Link>
          <div className={getTotlalAmount(0)?"dot":""}></div>
        </div>
        {!token ?<button onClick={()=>setshowlogin(true)}>sign in</button>:
        <div
        className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className='navbar-profile-dropdown'>
            <li onClick={()=>{navigate("/orders")}}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
        </div>
        }

       
      </div>
    </div>
  )
}

export default Navbar
