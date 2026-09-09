import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Product7 = ({ cartItems, setCartItems }) => {

  const handleChg = (product) => {
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
  <img src="https://plus.unsplash.com/premium_photo-1783874829440-b99f435a1d77?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8" class="card-img-top" alt="..."style={{height:"400px",objectFit:"cover"}} />
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>2000</h5> 
    <button className="btn btn-primary" onClick={() => handleChg({ id: 46, name: "Product 1", price: 2000, image: "https://plus.unsplash.com/premium_photo-1783874829440-b99f435a1d77?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1779406165834-662d6fd9f8f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>3,000</h5> 
    <button className="btn btn-primary" onClick={() => handleChg({ id: 47, name: "Product 2", price: 3000, image: "https://images.unsplash.com/photo-1779406165834-662d6fd9f8f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://plus.unsplash.com/premium_photo-1689371958019-cf543b5cd1b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4lMjBzaG9ydHN8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>3,000</h5> 
    <button className="btn btn-primary" onClick={() => handleChg({ id: 48, name: "Product 3", price: 3000, image: "https://plus.unsplash.com/premium_photo-1689371958019-cf543b5cd1b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4lMjBzaG9ydHN8ZW58MHx8MHx8fDA%3D", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>



</div>



{/* ------------------------------------------------------------------------- */}
<div className="grp8"  style={{display:"flex",justifyContent:"space-around",marginTop:"30px"}}>
<div className="card"  style={{width:"25rem"}}>
  <img src="https://plus.unsplash.com/premium_photo-1719306280448-1e012d998bbd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>3,500</h5> 
    <button className="btn btn-primary" onClick={() => handleChg({ id: 49, name: "Product 4", price: 6400, image: "https://plus.unsplash.com/premium_photo-1719306280448-1e012d998bbd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1693989248322-bdfa790f1b9a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>1,000</h5> 
    <button className="btn btn-primary" onClick={() => handleChg({ id: 66, name: "Product 6", price: 6000, image: "https://images.unsplash.com/photo-1693989248322-bdfa790f1b9a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
        <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1710296527252-38efc0aa48a0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>1,500</h5> 
    <button className="btn btn-primary" onClick={() => handleChg({ id: 51, name: "Product 6", price: 1500, image: "https://images.unsplash.com/photo-1710296527252-38efc0aa48a0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>
</div>
</div>
</>
  )
}

export default Product7
