// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,

//   reducers: {

//     // Add to Cart
//     addToCart: (state, action) => {
//       const product = action.payload;

//       const existingProduct = state.items.find(
//         (item) => item.id === product.id
//       );

//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         state.items.push({
//           ...product,
//           quantity: 1,
//         });
//       }
//     },

//     // Increase quantity
//     increment: (state, action) => {
//       const product = state.items.find(
//         (item) => item.id === action.payload
//       );

//       if (product) {
//         product.quantity += 1;
//       }
//     },

//     // Decrease quantity
//     decrement: (state, action) => {
//       const product = state.items.find(
//         (item) => item.id === action.payload
//       );

//       if (product && product.quantity > 1) {
//         product.quantity -= 1;
//       }
//     },

//     // Remove product
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//   },
// });

// export const {
//   addToCart,
//   increment,
//   decrement,
//   removeFromCart,
// } = cartSlice.actions;

// export default cartSlice.reducer;