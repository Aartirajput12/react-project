// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };

// const cart = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;

//       const existingItem = state.items.find(
//         (product) => product.id === item.id
//       );

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({
//           ...item,
//           quantity: 1,
//         });
//       }
//     },

//     removeFromCart: (state, action) => {
//       const id = action.payload;

//       state.items = state.items.filter(
//         (product) => product.id !== id
//       );
//     },

//     decreaseQuantity: (state, action) => {
//       const item = state.items.find(
//         (product) => product.id === action.payload
//       );

//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//     },
//   },
//  });

// export const {
//   addToCart,
//   removeFromCart,
//   decreaseQuantity,
// } = cart.actions;

// export default cart.reducer;