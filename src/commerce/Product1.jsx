import React from 'react'
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
const Product1 = ({ cartItems, setCartItems }) => {

  const handleAdd = (product) => {
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

  return (
<>
<div style={{backgroundColor:"rgba(147, 143, 143, 0.12)"}}>
<div className="grp9" style={{display:"flex",justifyContent:"space-around",paddingTop:"30px"}}>
<div className="card" style={{ width: "25rem" }}>
   <img src="https://plus.unsplash.com/premium_photo-1689371956254-1a8adca96b78?w=900&auto=format&fit=crop&q=60" className="card-img-top" alt="Product 1" style={{ height: "400px", objectFit: "cover", }} /> 
   <div className="card-body">
   <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>2000</h5> 
<button className="btn btn-primary" onClick={() => handleAdd({ id: 9, name: "Product 1", price: 2000, image: "https://plus.unsplash.com/premium_photo-1689371956254-1a8adca96b78?w=900&auto=format&fit=crop&q=60", }) } > Add to Cart </button>
<NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
        </div>
         </div>


<div className="card" style={{ width: "25rem" }}> 
  <img src="https://plus.unsplash.com/premium_photo-1669824377759-a5c2760ffec5?w=900&auto=format&fit=crop&q=60" className="card-img-top" alt="Product 2" style={{ height: "400px", objectFit: "cover", }} />
   <div className="card-body"> 
   <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>2500</h5> 
  <button className="btn btn-primary" onClick={() => handleAdd({ id: 10, name: "Product 2", price: 2500, image: "https://plus.unsplash.com/premium_photo-1669824377759-a5c2760ffec5?w=900&auto=format&fit=crop&q=60", }) } > Add to Cart </button>
  <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink> </div> </div>


  <div className="card" style={{ width: "25rem" }}>
     <img src="https://plus.unsplash.com/premium_photo-1771426603570-2e465f8b43b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8" className="card-img-top" alt="Product 3" style={{ height: "400px", objectFit: "cover", }} /> 
     <div className="card-body"> 
     <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>3000</h5> 
     <button className="btn btn-primary" onClick={() => handleAdd({ id: 11, name: "Product 3", price: 3000, image: "https://plus.unsplash.com/premium_photo-1771426603570-2e465f8b43b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8", }) } >
       Add to Cart </button>
<NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
       </div> </div>



</div>



{/* ------------------------------------------------------------------------- */}
<div className="grp8" style={{ display: "flex", justifyContent: "space-around", marginTop: "30px", }} > 
  {/* PRODUCT 4 */} 
  <div className="card" style={{ width: "25rem" }}> 
    <img src="https://plus.unsplash.com/premium_photo-1673757104327-92bf184d521a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY3fHx8ZW58MHx8fHx8" className="card-img-top" alt="Product 4" style={{ height: "400px", objectFit: "cover", }} /> 
    <div className="card-body"> 
    <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>4000</h5> 
      <button className="btn btn-primary" onClick={() => handleAdd({ id: 12, name: "Product 4", price: 4000, image: "https://plus.unsplash.com/premium_photo-1673757104327-92bf184d521a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY3fHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
        </div> 
        </div>

<div className="card" style={{ width: "25rem" }}>
   <img src="https://plus.unsplash.com/premium_photo-1729095332173-873d625bc8ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcyfHx8ZW58MHx8fHx8" className="card-img-top" alt="Product 5" style={{ height: "400px", objectFit: "cover", }} /> 
   <div className="card-body"> 
   <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>5000</h5>  
     <button className="btn btn-primary" onClick={() => handleAdd({ id: 13, name: "Product 5", price: 5000, image: "https://plus.unsplash.com/premium_photo-1729095332173-873d625bc8ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcyfHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
     <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
       </div> 
       </div>


<div className="card" style={{ width: "25rem" }}>
   <img src="https://images.unsplash.com/photo-1649327797448-6b693a179ebe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgzfHx8ZW58MHx8fHx8" className="card-img-top" alt="Product 6" style={{ height: "400px", objectFit: "cover", }} />
    <div className="card-body"> 
      <h5 className="card-title"><img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{height:"20px"}}/>6000</h5> 
     <button className="btn btn-primary" onClick={() => handleAdd({ id: 14, name: "Product 6", price: 6000, image: "https://images.unsplash.com/photo-1649327797448-6b693a179ebe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgzfHx8ZW58MHx8fHx8", }) } > Add to Cart </button>
      <NavLink to="/Form"><button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
      </div>
       </div>
</div>
</div>
</>
  )
}

export default Product1



















// const navigate = useNavigate();

  // const handleAddToCart = () => {
  //   const login = localStorage.getItem("login");
  
  //   if (login === "yes") {
  //     alert("Product added to cart");
  //   } else {
  //     navigate("/Sign");
  //   }
  // };
















// import React from 'react'

// const Product1 = () => {
//   return (
// <>
// <div className="grp9" style={{display:"flex",justifyContent:"space-around",marginTop:"30px"}}>
// <div className="card"  style={{width:"25rem"}}>
//   <img src="..." class="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <a href="#" className="btn btn-primary">Add to Cart</a>
//     <a href="#" className="btn btn-primary" style={{marginLeft:"10px"}}>Buy Now</a>
//   </div>
// </div>


// <div className="card"  style={{width:"25rem"}}>
//   <img src="..." class="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <a href="#" className="btn btn-primary">Add to Cart</a>
//     <a href="#" className="btn btn-primary" style={{marginLeft:"10px"}}>Buy Now</a>
//   </div>
// </div>


// <div className="card"  style={{width:"25rem"}}>
//   <img src="..." class="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <a href="#" className="btn btn-primary">Add to Cart</a>
//     <a href="#" className="btn btn-primary" style={{marginLeft:"10px"}}>Buy Now</a>
//   </div>
// </div>



// </div>



// {/* ------------------------------------------------------------------------- */}
// <div className="grp8"  style={{display:"flex",justifyContent:"space-around",marginTop:"30px"}}>
// <div className="card"  style={{width:"25rem"}}>
//   <img src="..." class="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <a href="#" className="btn btn-primary">Add to Cart</a>
//     <a href="#" className="btn btn-primary" style={{marginLeft:"10px"}}>Buy Now</a>
//   </div>
// </div>


// <div className="card"  style={{width:"25rem"}}>
//   <img src="..." class="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <a href="#" className="btn btn-primary">Add to Cart</a>
//     <a href="#" className="btn btn-primary" style={{marginLeft:"10px"}}>Buy Now</a>
//   </div>
// </div>


// <div className="card"  style={{width:"25rem"}}>
//   <img src="..." class="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <a href="#" className="btn btn-primary">Add to Cart</a>
//     <a href="#" className="btn btn-primary" style={{marginLeft:"10px"}}>Buy Now</a>
//   </div>
// </div>
// </div>

// </>
//   )
// }

// export default Product1
