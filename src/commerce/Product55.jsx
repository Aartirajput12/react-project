import React from 'react'
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const Product55 = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const handleChange = (product) => {
    const login = localStorage.getItem("login");
  
    if (login !== "yes") {
      navigate("/Sign");
      return;
    }
  
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
  <img src="https://images.unsplash.com/photo-1768033976371-0e4ef195dfa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGt1cnRpfGVufDB8fDB8fHww" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body" >
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>3,000</h5> 
    <button className="btn btn-primary" onClick={() => handleChange({ id: 68, name: "Product 2", price: 3000, image: "https://images.unsplash.com/photo-1768033976371-0e4ef195dfa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGt1cnRpfGVufDB8fDB8fHww" }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1764928947261-f5687e0faa4a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGt1cnRpfGVufDB8fDB8fHww" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>5,000</h5> 
    <button className="btn btn-primary" onClick={() => handleChange({ id: 35, name: "Product 2", price: 5000, image: "https://images.unsplash.com/photo-1764928947261-f5687e0faa4a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGt1cnRpfGVufDB8fDB8fHww", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1765529374927-052599af9c82?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGt1cnRpfGVufDB8fDB8fHww" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>4,000</h5> 
    <button className="btn btn-primary" onClick={() => handleChange({ id: 36, name: "Product 3", price: 4000, image: "https://images.unsplash.com/photo-1765529374927-052599af9c82?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGt1cnRpfGVufDB8fDB8fHww", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>



</div>



{/* ------------------------------------------------------------------------- */}
<div className="grp8"  style={{display:"flex",justifyContent:"space-around",marginTop:"30px"}}>
<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1767687717463-1c9a555c76c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>3,000</h5> 
  <button className="btn btn-primary" onClick={() => handleChange({ id: 69, name: "Product 5", price: 3000, image: "https://images.unsplash.com/photo-1767785829375-4678f57a4f5c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc3fHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1767785829375-4678f57a4f5c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc3fHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>2,000</h5> 
    <button className="btn btn-primary" onClick={() => handleChange({ id: 38, name: "Product 5", price: 2000, image: "https://images.unsplash.com/photo-1767785829375-4678f57a4f5c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc3fHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1763294631902-6e3b86b0b738?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>4,000</h5> 
    <button className="btn btn-primary" onClick={() => handleChange({ id: 39, name: "Product 6", price: 4000, image: "https://images.unsplash.com/photo-1763294631902-6e3b86b0b738?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>
</div>
</div>
</>
  )
}

export default Product55
