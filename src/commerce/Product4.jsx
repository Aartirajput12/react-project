import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
const Product4 = ({ cartItems, setCartItems }) => {

  const handleClick = (product) => {
    const alreadyAdded = cartItems.find(
      (item) => item.id === product.id
    );

    if (alreadyAdded) {
      return;
    }

    setCartItems((prev) => [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  // const navigate = useNavigate();

  // const handleAddToCart = () => {
  //   const login = localStorage.getItem("login");
  
  //   if (login === "yes") {
  //     alert("Product added to cart");
  //   } else {
  //     navigate("/Sign");
  //   }
  // };
  
  return (
<>
<div style={{backgroundColor:"rgba(147, 143, 143, 0.12)"}}>
<div className="grp9" style={{display:"flex",justifyContent:"space-around",paddingTop:"30px"}}>
<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>2,000</h5> 
    <button className="btn btn-primary" onClick={() => handleClick({ id: 27, name: "Product 6", price: 2000, image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>6,000</h5> 
    <button className="btn btn-primary" onClick={() => handleClick({ id: 28, name: "Product 6", price: 6000, image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1625216278474-0a67fe637e14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>4,000</h5>    
   <button className="btn btn-primary" onClick={() => handleClick({ id: 29, name: "Product 6", price: 4000, image: "https://images.unsplash.com/photo-1625216278474-0a67fe637e14?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>



</div>



{/* ------------------------------------------------------------------------- */}
<div className="grp8"  style={{display:"flex",justifyContent:"space-around",marginTop:"30px"}}>
<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1746730921458-13e3fb521d10?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>3,000</h5> 
    <button className="btn btn-primary" onClick={() => handleClick({ id: 30, name: "Product 6", price: 3000, image: "https://images.unsplash.com/photo-1746730921458-13e3fb521d10?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1713998293707-a3d2d6ca2961?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>4,500</h5> 
    <button className="btn btn-primary" onClick={() => handleClick({ id: 31, name: "Product 6", price: 4500, image: "https://images.unsplash.com/photo-1713998293707-a3d2d6ca2961?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1626008664056-9f541ee8a221?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>6,000</h5> 
    <button className="btn btn-primary" onClick={() => handleClick({ id: 32, name: "Product 6", price: 6000, image: "https://images.unsplash.com/photo-1626008664056-9f541ee8a221?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>
</div>
</div>
</>
  )
}

export default Product4
// <button className="btn btn-primary" onClick={() => handleClick({ id: 27, name: "Product 6", price: 6000, image: "", }) } > Add to Cart </button>