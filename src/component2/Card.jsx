// // import React from 'react'

// // const Card = () => {
// //   return (
// // <>
// // <div style={{display:"flex",justifyContent:"space-around"}}>
// // <div className="card"  style={{width:"25rem"}}>
// //   <img src="https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNofGVufDB8fDB8fHww" className="card-img-top" alt="..."/>
// //   <div className="card-body">
// //     <h5 className="card-title">Card title</h5>
// //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
// //     <a href="#" className="btn btn-primary">Add to cart</a>
// //   </div>
// // </div>  

// // <div className="card"  style={{width:"25rem"}}>
// //   <img src="https://media.istockphoto.com/id/1170648040/photo/beautiful-lady-overjoyed-by-warm-spring-breeze-dream-of-romantic-date-wear-cute-floral-dress.jpg?s=612x612&w=0&k=20&c=UzOoNF1-F6pR5uSu6mTqnPAYR4eg6paDy4FKfhYVInU=" className="card-img-top" alt="..."/>
// //   <div className="card-body">
// //     <h5 className="card-title">Card title</h5>
// //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
// //     <a href="#" className="btn btn-primary">Add to cart</a>
// //   </div>
// // </div>  

// // <div className="card"  style={{width:"25rem"}}>
// //   <img src="https://images.unsplash.com/photo-1662245336484-99d8ee24ec30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8" className="card-img-top" alt="..." />
// //   <div className="card-body">
// //     <h5 className="card-title">Card title</h5>
// //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
// //     <a href="#" className="btn btn-primary">Add to cart</a>
// //   </div>
// // </div>  
// // </div>
// // </>
// //   )
// // }

// // export default Card



// import React from "react";
// import { useDispatch } from "react-redux";
// import {
//   addToCart,
//   removeFromCart,
// } from "./Cart";

// const Card = () => {
//   const dispatch = useDispatch();

//   const products = [
//     {
//       id: 1,
//       title: "Watch",
//       description: "price:10,000",
//       image:
//         "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?w=900&auto=format&fit=crop&q=60",
//     },
//     {
//       id: 2,
//       title: "Dress",
//       description: "price:5,000",
//       image:
//         "https://media.istockphoto.com/id/1170648040/photo/beautiful-lady-overjoyed-by-warm-spring-breeze-dream-of-romantic-date-wear-cute-floral-dress.jpg?s=612x612&w=0&k=20&c=UzOoNF1-F6pR5uSu6mTqnPAYR4eg6paDy4FKfhYVInU=",
//     },
//     {
//       id: 3,
//       title: "Shoes",
//       description: "price:10,000",
//       image:
//         "https://images.unsplash.com/photo-1662245336484-99d8ee24ec30?w=900&auto=format&fit=crop&q=60",
//     },
//   ];

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//       }}
//     >
//       {products.map((product) => (
//         <div
//           className="card"
//           style={{ width: "25rem" }}
//           key={product.id}
//         >
//           <img
//             src={product.image}
//             className="card-img-top"
//             alt={product.title}
//           />

//           <div className="card-body">
//             <h5 className="card-title">
//               {product.title}
//             </h5>

//             <p className="card-text">
//               {product.description}
//             </p>

//             <button
//               className="btn btn-primary"
//               onClick={() => dispatch(addToCart(product))}
//             >
//               Add to cart
//             </button>

//             <button
//               className="btn btn-danger ms-2" 
//               onClick={() =>
//                 dispatch(removeFromCart(product.id))
//               }
//             >
//               Remove
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;