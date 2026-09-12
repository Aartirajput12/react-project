import React from "react";
 import { NavLink } from "react-router-dom";

  const Cards25 = ({ cartItems, setCartItems }) => {
    
     const handleAddToCart = (product) => { 

      const alreadyAdded = cartItems.find(
         (item) => item.id === product.id ); 
         alert("product added to cart")
         if (alreadyAdded) { return;
         } setCartItems((prev) => 
          [ ...prev, { ...product, quantity: 1,

           }, 
          ]); 
        };



            return ( 
            <> 
            {/* RESPONSIVE CSS */}
 <style> {` .gp1, .grp9 { display: flex; justify-content: space-around; gap: 20px; margin-top: 30px; flex-wrap: wrap; } 
 .gp1 .card, .grp9 .card { width: 25rem; } .product-img { width: 100%; height: 400px; object-fit: cover; }
  .product-buttons { display: flex; gap: 10px; flex-wrap: wrap; } 
  
  /* TABLET */ @media (max-width: 992px) { .gp1, .grp9 { justify-content: center; gap: 20px; padding: 0 15px; } 
  .gp1 .card, .grp9 .card { width: 45% !important; } .product-img { height: 350px !important; } } 

  /* MOBILE */
@media (max-width: 576px) {

  .gp1,
  .grp9 {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 20px !important;
    padding: 0 15px;
  }

  .gp1 .card,
  .grp9 .card {
    width: 100% !important;
    max-width: 400px;
  }

  .product-img {
    height: 350px !important;
  }

  /* BUTTONS SAME ROW */
  .product-buttons {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    gap: 10px !important;
    width: 100%;
  }

  .product-buttons .btn {
    width: auto !important;
    margin-left: 0 !important;
    flex: 1;
  }

  .product-buttons a {
    width: auto !important;
    flex: 1;
  }

  .product-buttons a .btn {
    width: 100%;
    margin-left: 0 !important;
  }
}
    
    /* SMALL MOBILE */ @media (max-width: 375px) 
    { .gp1, .grp9 { padding: 0 10px; } .gp1 .card, .grp9 .card { width: 100% !important; }
      .product-img { height: 300px !important; } } `}
       </style>

        <h3 style={{ textAlign: "center", marginTop: "10px", }} >New Arrivals </h3>

            {/* FIRST ROW */} 
            <div className="gp1" style={{ display: "flex", justifyContent: "space-around", marginTop: "10px", }} > 

{/* PRODUCT 1 */} 
<div className="card"> 
<img src="https://images.unsplash.com/photo-1727535726705-b2aa71327c1c?w=900&auto=format&fit=crop&q=60" className="card-img-top product-img" alt="Product 1" /> 
 <div className="card-body"> 
<h5 className="card-title">
   <img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{ height: "20px", width: "20px", }} alt="rupee" /> 2,000 </h5>
<div className="product-buttons">
   <button className="btn btn-primary" onClick={() => handleAddToCart({ id: 1, price: 2000, image: "https://images.unsplash.com/photo-1727535726705-b2aa71327c1c?w=900&auto=format&fit=crop&q=60", }) } > Add to Cart </button> 
             <NavLink to="/Form"> <button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink> </div> </div> </div> 
             
 {/* PRODUCT 2 */}
  <div className="card"> 
    <img src="https://images.unsplash.com/photo-1768803968271-06b01687c53b?w=900&auto=format&fit=crop&q=60" className="card-img-top product-img" alt="Product 2" /> 
    
    <div className="card-body">
       <h5 className="card-title"> <img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{ height: "20px", width: "20px", }} alt="rupee" /> 4,000 </h5>
        <div className="product-buttons">
           <button className="btn btn-primary" onClick={() => handleAddToCart({ id: 2, price: 4000, image: "https://images.unsplash.com/photo-1768803968271-06b01687c53b?w=900&auto=format&fit=crop&q=60", }) } > Add to Cart </button>
            <NavLink to="/Form"> <button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> 
            </NavLink> </div> </div> </div>
            

{/* PRODUCT 3 */}
          <div className="card">
 <img src="https://images.unsplash.com/photo-1745482039058-92017fb981cf?w=900&auto=format&fit=crop&q=60" className="card-img-top product-img" alt="Product 3" />
  <div className="card-body">
     <h5 className="card-title">
       <img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{ height: "20px", width: "20px", }} alt="rupee" /> 10,000 </h5>
        <div className="product-buttons"> 
          <button className="btn btn-primary" onClick={() => handleAddToCart({ id: 3, price: 10000, image: "https://images.unsplash.com/photo-1745482039058-92017fb981cf?w=900&auto=format&fit=crop&q=60", }) } > Add to Cart </button> 
          <NavLink to="/Form"> <button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
           </div> </div> </div> 
           

{/* PRODUCT 4 */} 
           <div className="card"> 
            <img src="https://images.unsplash.com/photo-1765229277675-b8466891e689?w=900&auto=format&fit=crop&q=60" className="card-img-top product-img" alt="Product 4" />
             <div className="card-body"> 
              <h5 className="card-title">
                 <img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{ height: "20px", width: "20px", }} alt="rupee" /> 15,000 </h5>
                  <div className="product-buttons"> <button className="btn btn-primary" onClick={() => handleAddToCart({ id: 4, price: 15000, image: "https://images.unsplash.com/photo-1765229277675-b8466891e689?w=900&auto=format&fit=crop&q=60", }) } > Add to Cart </button>
                   <NavLink to="/Form"> <button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink> 
                   </div> </div> </div> </div> 
                   
         {/* SECOND ROW */}
      <div className="grp9" style={{ display: "flex", justifyContent: "space-around", marginTop: "30px", }} >

 {/* PRODUCT 5 */}
  <div className="card"> 
    <img src="https://images.unsplash.com/photo-1756699066165-dfa46a13288d?w=900&auto=format&fit=crop&q=60" className="card-img-top product-img" alt="Product 5" /> 
    <div className="card-body">
       <h5 className="card-title">
         <img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{ height: "20px", width: "20px", }} alt="rupee" /> 6,000 </h5> <div className="product-buttons">
           <button className="btn btn-primary" onClick={() => handleAddToCart({ id: 5, price: 6000, image: "https://images.unsplash.com/photo-1756699066165-dfa46a13288d?w=900&auto=format&fit=crop&q=60", }) } > Add to Cart </button>
            <NavLink to="/Form"> <button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
             </div> </div> </div>
             

    {/* PRODUCT 6 */} 
         <div className="card"> 
      <img src="https://images.unsplash.com/photo-1721182420935-29bfb69dd26c?w=900&auto=format&fit=crop&q=60" className="card-img-top product-img" alt="Product 6" /> 
      <div className="card-body">
        <h5 className="card-title"> 
      <img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{ height: "20px", width: "20px", }} alt="rupee" /> 5,000 </h5> <div className="product-buttons">
   <button className="btn btn-primary" onClick={() => handleAddToCart({ id: 6, price: 5000, image: "https://images.unsplash.com/photo-1721182420935-29bfb69dd26c?w=900&auto=format&fit=crop&q=60", }) } > Add to Cart </button> 
             <NavLink to="/Form"> <button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink>
 </div> </div> </div>
                       
                       
{/* PRODUCT 7 */} 
<div className="card">
   <img src="https://images.unsplash.com/photo-1786053804264-afe55c3ffe47?w=900&auto=format&fit=crop&q=60" className="card-img-top product-img" alt="Product 7" /> 
   <div className="card-body">
     <h5 className="card-title">
      
       <img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{ height: "20px", width: "20px", }} alt="rupee" /> 4,000 </h5>
        <div className="product-buttons"> <button className="btn btn-primary" onClick={() => handleAddToCart({ id: 7, price: 4000, image: "https://images.unsplash.com/photo-1786053804264-afe55c3ffe47?w=900&auto=format&fit=crop&q=60", }) } > Add to Cart </button>
         <NavLink to="/Form"> 
        <button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button>
         </NavLink> 
         </div> </div> </div>
         
         
 {/* PRODUCT 8 */}
  <div className="card"> 
    <img src="https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=900&auto=format&fit=crop&q=60" className="card-img-top product-img" alt="Product 8" />
     <div className="card-body">
       <h5 className="card-title"> 
        <img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png" style={{ height: "20px", width: "20px", }} alt="rupee" /> 5,000 </h5>
         <div className="product-buttons"> <button className="btn btn-primary" onClick={() => handleAddToCart({ id: 8, price: 5000, image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=900&auto=format&fit=crop&q=60", }) } > Add to Cart </button>
          <NavLink to="/Form"> <button className="btn btn-primary" style={{ marginLeft: "10px" }} > Buy Now </button> </NavLink> 
          </div> </div> </div> </div>
          
           </> 
           ); 
          }; 
            export default Cards25;




            















































































            // import React from "react";
// import { NavLink } from "react-router-dom";

// const Cards25 = ({ cartItems, setCartItems }) => {

//   const handleAddToCart = (product) => {
//     const alreadyAdded = cartItems.find(
//       (item) => item.id === product.id
//     );

//     if (alreadyAdded) {
//       return;
//     }

//     setCartItems((prev) => [
//       ...prev,
//       {
//         ...product,
//         quantity: 1,
//       },
//     ]);
//   };

//   return (
//     <>
//       <h3
//         style={{
//           textAlign: "center",
//           marginTop: "10px",
//         }}
//       >
//         New Arrivals
//       </h3>

//       {/* FIRST ROW */}
//       <div
//         className="gp1"
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           marginTop: "10px",
//         }}
//       >

//         {/* PRODUCT 1 */}
//         <div className="card" style={{ width: "25rem" }}>
//           <img src="https://images.unsplash.com/photo-1727535726705-b2aa71327c1c?w=900&auto=format&fit=crop&q=60" className="card-img-top"alt="Product 1"style={{height: "400px",objectFit: "cover",}}/>
//  <div className="card-body">
// <h5 className="card-title">
// <img src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"style={{ height: "20px" }}alt="rupee"/>2,000 </h5>
// <button className="btn btn-primary"onClick={() =>handleAddToCart({ id: 1,price: 2000,image: "https://images.unsplash.com/photo-1727535726705-b2aa71327c1c?w=900&auto=format&fit=crop&q=60", })}>
//               Add to Cart
//             </button>

// <NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink>
//           </div>
//         </div>


//         {/* PRODUCT 2 */}
// <div className="card" style={{ width: "25rem" }}>
// <img src="https://images.unsplash.com/photo-1768803968271-06b01687c53b?w=900&auto=format&fit=crop&q=60"className="card-img-top"alt="Product 2"style={{ height: "400px",objectFit: "cover",}} />

//           <div className="card-body">
//             <h5 className="card-title">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
//                 style={{ height: "20px" }}
//                 alt="rupee"
//               />
//               4,000
//             </h5>

//             <button
//               className="btn btn-primary"
//               onClick={() =>
//                 handleAddToCart({
//                   id: 2,
//                   price: 4000,
//                   image:
//                     "https://images.unsplash.com/photo-1768803968271-06b01687c53b?w=900&auto=format&fit=crop&q=60",
//                 })
//               }
//             >
//               Add to Cart
//             </button>
//             <NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink> </div>
//         </div>


//         {/* PRODUCT 3 */}
//         <div className="card" style={{ width: "25rem" }}>
//           <img
//             src="https://images.unsplash.com/photo-1745482039058-92017fb981cf?w=900&auto=format&fit=crop&q=60"
//             className="card-img-top"
//             alt="Product 3"
//             style={{
//               height: "400px",
//               objectFit: "cover",
//             }}
//           />

//           <div className="card-body">
//             <h5 className="card-title">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
//                 style={{ height: "20px" }}
//                 alt="rupee"
//               />
//               10,000
//             </h5>

//             <button
//               className="btn btn-primary"
//               onClick={() =>
//                 handleAddToCart({
//                   id: 3,
//                   price: 10000,
//                   image:
//                     "https://images.unsplash.com/photo-1745482039058-92017fb981cf?w=900&auto=format&fit=crop&q=60",
//                 })
//               }
//             >
//               Add to Cart
//             </button>

//  <NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink>
//  </div></div>

//         {/* PRODUCT 4 */}
//         <div className="card" style={{ width: "25rem" }}>
//           <img
//             src="https://images.unsplash.com/photo-1765229277675-b8466891e689?w=900&auto=format&fit=crop&q=60"
//             className="card-img-top"
//             alt="Product 4"
//             style={{
//               height: "400px",
//               objectFit: "cover",
//             }}
//           />

//           <div className="card-body">
//             <h5 className="card-title">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
//                 style={{ height: "20px" }}
//                 alt="rupee"
//               />
//               15,000
//             </h5>

//             <button
//               className="btn btn-primary"
//               onClick={() =>
//                 handleAddToCart({
//                   id: 4,
//                   price: 15000,
//                   image:
//                     "https://images.unsplash.com/photo-1765229277675-b8466891e689?w=900&auto=format&fit=crop&q=60",
//                 })
//               }
//             >
//               Add to Cart
//             </button>

            
//  <NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink>
// </div>
//         </div>

//       </div>


//       {/* SECOND ROW */}
//       <div
//         className="grp9"
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           marginTop: "30px",
//         }}
//       >

//         {/* PRODUCT 5 */}
//         <div className="card" style={{ width: "25rem" }}>
//           <img
//             src="https://images.unsplash.com/photo-1756699066165-dfa46a13288d?w=900&auto=format&fit=crop&q=60"
//             className="card-img-top"
//             alt="Product 5"
//             style={{
//               height: "400px",
//               objectFit: "cover",
//             }}
//           />

//           <div className="card-body">
//             <h5 className="card-title">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
//                 style={{ height: "20px" }}
//                 alt="rupee"
//               />
//               6,000
//             </h5>

//             <button
//               className="btn btn-primary"
//               onClick={() =>
//                 handleAddToCart({
//                   id: 5,
//                   price: 6000,
//                   image:
//                     "https://images.unsplash.com/photo-1756699066165-dfa46a13288d?w=900&auto=format&fit=crop&q=60",
//                 })
//               }
//             >
//               Add to Cart
//             </button>

// <NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink>
//           </div>
//         </div>


//         {/* PRODUCT 6 */}
//         <div className="card" style={{ width: "25rem" }}>
//           <img
//             src="https://images.unsplash.com/photo-1721182420935-29bfb69dd26c?w=900&auto=format&fit=crop&q=60"
//             className="card-img-top"
//             alt="Product 6"
//             style={{
//               height: "400px",
//               objectFit: "cover",
//             }}
//           />

//           <div className="card-body">
//             <h5 className="card-title">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
//                 style={{ height: "20px" }}
//                 alt="rupee"
//               />
//               5,000
//             </h5>

//             <button
//               className="btn btn-primary"
//               onClick={() =>
//                 handleAddToCart({
//                   id: 6,
//                   price: 5000,
//                   image:
//                     "https://images.unsplash.com/photo-1721182420935-29bfb69dd26c?w=900&auto=format&fit=crop&q=60",
//                 })
//               }
//             >
//               Add to Cart
//             </button>

//             <NavLink to="/Form"><button
//               className="btn btn-primary"
//               style={{ marginLeft: "10px" }}
//             >
//               Buy Now
//             </button></NavLink>
//           </div>
//         </div>


//         {/* PRODUCT 7 */}
//         <div className="card" style={{ width: "25rem" }}>
//           <img
//             src="https://images.unsplash.com/photo-1786053804264-afe55c3ffe47?w=900&auto=format&fit=crop&q=60"
//             className="card-img-top"
//             alt="Product 7"
//             style={{
//               height: "400px",
//               objectFit: "cover",
//             }}
//           />

//           <div className="card-body">
//             <h5 className="card-title">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
//                 style={{ height: "20px" }}
//                 alt="rupee"
//               />
//               4,000
//             </h5>

//             <button
//               className="btn btn-primary"
//               onClick={() =>
//                 handleAddToCart({
//                   id: 7,
//                   price: 4000,
//                   image:
//                     "https://images.unsplash.com/photo-1786053804264-afe55c3ffe47?w=900&auto=format&fit=crop&q=60",
//                 })
//               }
//             >
//               Add to Cart
//             </button>

//             <NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink>
//           </div>
//         </div>


//         {/* PRODUCT 8 */}
//         <div className="card" style={{ width: "25rem" }}>
//           <img
//             src="https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=900&auto=format&fit=crop&q=60"
//             className="card-img-top"
//             alt="Product 8"
//             style={{
//               height: "400px",
//               objectFit: "cover",
//             }}
//           />

//           <div className="card-body">
//             <h5 className="card-title">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/11822/11822840.png"
//                 style={{ height: "20px" }}
//                 alt="rupee"
//               />
//               5,000
//             </h5>

//             <button
//               className="btn btn-primary"
//               onClick={() =>
//                 handleAddToCart({
//                   id: 8,
//                   price: 5000,
//                   image:
//                     "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=900&auto=format&fit=crop&q=60",
//                 })
//               }
//             >
//               Add to Cart
//             </button>

//             <NavLink to="/Form"><button className="btn btn-primary"style={{ marginLeft: "10px" }}>Buy Now</button></NavLink>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Cards25;

