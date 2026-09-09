import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
const Product3 = ({ cartItems, setCartItems }) => {

  const handleCart = (product) => {
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


{/* RESPONSIVE CSS */}
<style> {` .gp1, .grp9 { display: flex; justify-content: space-around; gap: 20px; margin-top: 30px; flex-wrap: wrap; } 
 .gp1 .card, .grp9 .card { width: 25rem; } .product-img { width: 100%; height: 400px; object-fit: cover; }
  .product-buttons { display: flex; gap: 10px; flex-wrap: wrap; } 
  
  /* TABLET */ @media (max-width: 992px) { .gp1, .grp9 { justify-content: center; gap: 20px; padding: 0 15px; } 
  .gp1 .card, .grp9 .card { width: 45% !important; } .product-img { height: 350px !important; } } 

  /* MOBILE */ @media (max-width: 576px) 
  { .gp1, .grp9 { display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; gap: 20px !important; padding: 0 15px; } 
   .gp1 .card, .grp9 .card { width: 100% !important; max-width: 400px; } 
   .product-img { height: 350px !important; }
    .product-buttons { display: flex; flex-direction: column; gap: 10px; } 
    .product-buttons .btn { width: 200px; margin-left: 0 !important; } .product-buttons a { width: 100%; } } 
    
    /* SMALL MOBILE */ @media (max-width: 375px) 
    { .gp1, .grp9 { padding: 0 10px; } .gp1 .card, .grp9 .card { width: 100% !important; }
      .product-img { height: 300px !important; } } `}
       </style>




<div style={{backgroundColor:"rgba(147, 143, 143, 0.12)"}}>
<div className="gr" style={{display:"flex",justifyContent:"space-around",paddingTop:"30px"}}>
<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1722627813009-f1169e6334bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVobmdhfGVufDB8fDB8fHww" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>14,000</h5> 
    <button className="btn btn-primary" onClick={() => handleCart({ id: 21, name: "Product 6", price: 20000, image: "", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1649930308240-0a4ae421ff77?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk0fHx8ZW58MHx8fHx8" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>15,000</h5> 
    <button className="btn btn-primary" onClick={() => handleCart({ id: 22, name: "Product 6", price: 15000, image: "", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1629118477133-b8b1499f2b8a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body"><h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>9,000</h5> 

  <button className="btn btn-primary" onClick={() => handleCart({ id: 23, name: "Product 6", price: 9000, image: "", }) } > Add to Cart </button>
        <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>



</div>



{/* ------------------------------------------------------------------------- */}
<div className="grp"  style={{display:"flex",justifyContent:"space-around",marginTop:"30px"}}>
<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1672985352559-e76417a8ea76?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0Mnx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>6,000</h5> 
    <button className="btn btn-primary" onClick={() => handleCart({ id: 24, name: "Product 6", price: 6000, image: "https://images.unsplash.com/photo-1672985352559-e76417a8ea76?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0Mnx8fGVufDB8fHx8fA%3D%3D", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1733937111165-36efb3ded769?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2MXx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>18,000</h5> 
    <button className="btn btn-primary" onClick={() => handleCart({ id: 25, name: "Product 6", price: 18000, image: "https://images.unsplash.com/photo-1733937111165-36efb3ded769?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2MXx8fGVufDB8fHx8fA%3D%3D", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>


<div className="card"  style={{width:"25rem"}}>
  <img src="https://images.unsplash.com/photo-1787831399008-bfcf54604470?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2NXx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." style={{height:"400px",objectFit:"cover"}}/>
  <div className="card-body">
  <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>16,000</h5> 
    <button className="btn btn-primary" onClick={() => handleCart({ id: 26, name: "Product 6", price: 16000, image: "https://images.unsplash.com/photo-1787831399008-bfcf54604470?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2NXx8fGVufDB8fHx8fA%3D%3D", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
  </div>
</div>
</div>
</div>
</>
  )
}

export default Product3

// https://images.unsplash.com/photo-1756483510774-a3a100ce8fc9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1Mnx8fGVufDB8fHx8fA%3D%3D
// https://images.unsplash.com/photo-1756483511246-12ae36997a1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8