// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   removeFromCart,
//   decreaseQuantity,
//   addToCart,
// } from "./Cart";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   return (
//     <div className="container mt-4">
//       <h2>My Cart</h2>

//       {cartItems.length === 0 ? (
//         <h4>Your cart is empty</h4>
//       ) : (
//         cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="card mb-3"
//             style={{ width: "100%" }}
//           >
//             <div className="card-body">

//               <h5>{item.title}</h5>

//               <p>{item.description}</p>

//               <p>
//                 Quantity: {item.quantity}
//               </p>

//               <button
//                 className="btn btn-secondary me-2"
//                 onClick={() =>
//                   dispatch(decreaseQuantity(item.id))
//                 }
//               >
//                 -
//               </button>

//               <button
//                 className="btn btn-primary me-2"
//                 onClick={() =>
//                   dispatch(addToCart(item))
//                 }
//               >
//                 +
//               </button>

//               <button
//                 className="btn btn-danger"
//                 onClick={() =>
//                   dispatch(removeFromCart(item.id))
//                 }
//               >
//                 Remove
//               </button>

//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;