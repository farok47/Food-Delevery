import './App.css';
import Navbar from './components/navbar/Navbar';
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home';
import Card from"./pages/card/Card"
import PlaceOrder from './pages/order/PlaceOrder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';

function App() {
  const [showlogin,setshowlogin]=useState(false)
  
  return (
   <>
   {showlogin?<LoginPopup setshowlogin={setshowlogin}/>:<></>   }
    <div className="App">
      <Navbar setshowlogin={setshowlogin} />
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/card'element={<Card/>} />
      </Routes>
      <Footer/>
    </div>
   </>
  );
}

export default App;
