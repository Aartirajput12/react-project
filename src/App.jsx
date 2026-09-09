import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Nav5 from "./commerce/Nav5";
import UI from "./commerce/UI";
import Cards5 from "./commerce/Cards5";
import Img from "./commerce/Img";
import Product1 from "./commerce/Product1";
import Product2 from "./commerce/Product2";
import Product3 from "./commerce/Product3";
import Product4 from "./commerce/Product4";
import Product55 from "./commerce/Product55";
import Product6 from "./commerce/Product6";
import Product7 from "./commerce/Product7";
import Sign from "./commerce/Sign";
import Log from "./commerce/Log";
import Cards25 from "./commerce/Cards25";
import Addcart from "./commerce/Addcart";
import Form from "./commerce/Form";
import Success from "./commerce/Success";
import Footer from "./commerce/Footer";
import Pay from "./commerce/Pay";
function App() {
 const [cartItems, setCartItems] = useState([]);
  return (
    <>
          <Nav5 count={cartItems.length} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <UI />
              <Img />

              {/* <Cards5/> */}
              <Cards25 
           cartItems={cartItems}
           setCartItems={setCartItems} />

<Footer/>
            </>
          }
        />

        <Route path="/Product1" element={<Product1 cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/Product2" element={<Product2    cartItems={cartItems}setCartItems={setCartItems}/>} />
        <Route path="/Product3" element={<Product3    cartItems={cartItems}setCartItems={setCartItems}/>} />
        <Route path="/Product4" element={<Product4    cartItems={cartItems}setCartItems={setCartItems} />} />
        <Route path="/Product55" element={<Product55   cartItems={cartItems}setCartItems={setCartItems} />} />
        <Route path="/Product6" element={<Product6    cartItems={cartItems}setCartItems={setCartItems} />} />
        <Route path="/Product7" element={<Product7    cartItems={cartItems}setCartItems={setCartItems}/>} />
        <Route path="/Addcart" element={<Addcart     cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Log" element={<Log />} />
        <Route path="/Form" element={<Form/>} />
        <Route path="/Success" element={<Success/>} />
        <Route path="/Pay" element={<Pay/>} />
      </Routes>
    </>
  );
}

export default App;