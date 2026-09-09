// import React from "react";
// import { useSelector, useDispatch } from "react-redux";

// import {
//   incrementQuantity,
//   decrementQuantity,
//   removeFromCart,
// } from "./CartSlice";

// const Add = () => {
//   const cartItems = useSelector(
//     (state) => state.cart.items
//   );

//   const dispatch = useDispatch();

//   return (
//     <div className="container mt-5">
//       <h2>My Cart</h2>

//       {cartItems.length === 0 ? (
//         <h4>Your cart is empty</h4>
//       ) : (
//         <div className="row">
//           {cartItems.map((product) => (
//             <div
//               className="col-md-4 mb-4"
//               key={product.id}
//             >
//               <div className="card">

//                 <img
//                   src={product.image}
//                   className="card-img-top"
//                   alt={product.title}
//                   style={{
//                     height: "250px",
//                     objectFit: "cover",
//                   }}
//                 />

//                 <div className="card-body">

//                   <h5>{product.title}</h5>

//                   <p>{product.description}</p>

//                   {/* Quantity Buttons */}
//                   <div className="d-flex align-items-center gap-3">

//                     <button
//                       className="btn btn-danger"
//                       onClick={() =>
//                         dispatch(
//                           decrementQuantity(product.id)
//                         )
//                       }
//                     >
//                       -
//                     </button>

//                     <h5 className="m-0">
//                       {product.quantity}
//                     </h5>

//                     <button
//                       className="btn btn-success"
//                       onClick={() =>
//                         dispatch(
//                           incrementQuantity(product.id)
//                         )
//                       }
//                     >
//                       +
//                     </button>

//                   </div>

//                   {/* Remove Button */}
//                   <button
//                     className="btn btn-dark mt-3"
//                     onClick={() =>
//                       dispatch(
//                         removeFromCart(product.id)
//                       )
//                     }
//                   >
//                     Remove
//                   </button>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Add;