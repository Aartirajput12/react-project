import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Product6 = ({ cartItems, setCartItems }) => {

  const handleClk = (product) => {
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
  <img src="https://images.unsplash.com/photo-1756483510774-a3a100ce8fc9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1Mnx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>3,000</h5> 
    <button className="btn btn-primary" onClick={() => handleClk({ id: 40, name: "Product 1", price: 3000, image: "https://images.unsplash.com/photo-1756483510774-a3a100ce8fc9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1Mnx8fGVufDB8fHx8fA%3D%3D", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1756483511246-12ae36997a1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>4,500</h5> 
    <button className="btn btn-primary" onClick={() => handleClk({ id: 41, name: "Product 2", price: 4500, image: "https://images.unsplash.com/photo-1756483511246-12ae36997a1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1638457130797-ce36c8dbe3dd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>3,000</h5> 
    <button className="btn btn-primary" onClick={() => handleClk({ id: 42, name: "Product 3", price: 3000, image: "https://images.unsplash.com/photo-1638457130797-ce36c8dbe3dd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>



</div>



{/* ------------------------------------------------------------------------- */}
<div className="grp8"  style={{display:"flex",justifyContent:"space-around",marginTop:"30px"}}>
<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1649140334873-3d8823e5ce40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>3,000</h5> 
    <button className="btn btn-primary" onClick={() => handleClk({ id: 65, name: "Product 4", price: 3000, image: "https://images.unsplash.com/photo-1649140334873-3d8823e5ce40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1733731402869-57e0cce24aea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>4,500</h5> 
    <button className="btn btn-primary" onClick={() => handleClk({ id: 44, name: "Product 5", price: 4500, image: "https://images.unsplash.com/photo-1733731402869-57e0cce24aea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1756483502814-fd570db8d4c7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUzfHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>3,500</h5> 
    <button className="btn btn-primary" onClick={() => handleClk({ id: 45, name: "Product 6", price: 3500, image: "https://images.unsplash.com/photo-1756483502814-fd570db8d4c7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUzfHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>
</div>
</div>
</>
  )
}

export default Product6
