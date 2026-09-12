// import React from "react";
// import { NavLink } from "react-router-dom";

// const Addcart = ({ cartItems, setCartItems }) => {

//   const handleAdd = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   const handleSub = (id) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: item.quantity > 1
//                 ? item.quantity - 1
//                 : 1,
//             }
//           : item
//       )
//     );
//   };

//   const handleRemove = (id) => {
//     setCartItems((prev) =>
//       prev.filter((item) => item.id !== id)
//     );
//   };

//   const totalPrice = cartItems.reduce(
//     (total, item) =>
//       total + item.price * item.quantity,
//     0
//   );

//   return (
//     <>
//       <h2 style={{ textAlign: "center" }}>
//         My Cart
//       </h2>

//       {cartItems.length === 0 ? (
//         <h4 style={{ textAlign: "center" }}>
//           Cart is Empty
//         </h4>
//       ) : (
//         <>
//           {/* PRODUCTS */}
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "20px",
//                 margin: "20px",
//                 border: "1px solid gray",
//                 padding: "10px",
//               }}
//             >
//               <img
//                 src={item.image}
//                 alt="product"
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   objectFit: "cover",
//                 }}
//               />

//               <h4>₹ {item.price}</h4>

//               <button
//                 onClick={() => handleAdd(item.id)}
//                 style={{ width: "50px" }}
//               >
//                 +
//               </button>

//               <p style={{ margin: 0 }}>
//                 {item.quantity}
//               </p>

//               <button
//                 onClick={() => handleSub(item.id)}
//                 style={{ width: "50px" }}
//               >
//                 -
//               </button>

//               <h5 style={{ marginLeft: "100px" }}>
//                 Total: ₹ {item.price * item.quantity}
//               </h5>

//               <button
//                 onClick={() => handleRemove(item.id)}
//                 style={{
//                   border: "none",
//                   padding: "8px 15px",
//                   cursor: "pointer",
//                   marginLeft: "auto",
//                 }}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           {/* GRAND TOTAL */}
//           <div
//             style={{
//               textAlign: "center",
//               marginTop: "30px",
//               padding: "20px",
//             }}
//           >
//             <h3>
//               Grand Total: ₹ {totalPrice}
//             </h3>

//             <NavLink to="/Form"><button
//               style={{
//                 background: "green",
//                 color: "white",
//                 border: "none",
//                 padding: "10px 30px",
//                 fontSize: "18px",
//                 cursor: "pointer",
//               }}
//             >
//               Buy
//             </button></NavLink>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Addcart;


import React from "react";
import { NavLink } from "react-router-dom";

const Addcart = ({ cartItems, setCartItems }) => {

  const handleAdd = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleSub = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1
                ? item.quantity - 1
                : 1,
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <>
      <style>{`

        .cart-page {
          width: 100%;
          max-width: 1000px;
          margin: auto;
          padding: 10px;
          box-sizing: border-box;
        }

        .cart-item {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 20px 0;
          border: 1px solid gray;
          padding: 10px;
          box-sizing: border-box;
          width: 100%;
        }

        .cart-product-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .cart-price {
          margin: 0;
          white-space: nowrap;
        }

        .quantity-button {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
        }

        .quantity {
          margin: 0;
          min-width: 20px;
          text-align: center;
        }

        .item-total {
          margin-left: auto;
          white-space: nowrap;
        }

        .remove-button {
          border: none;
          padding: 8px 15px;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
        }


        /* MOBILE */
        @media (max-width: 576px) {

          .cart-page {
            padding: 10px;
            width: 100%;
          }

          .cart-item {
            display: grid;

            grid-template-columns: 80px 1fr 1fr;

            gap: 10px;

            margin: 15px 0;

            padding: 10px;

            width: 100%;

            box-sizing: border-box;
          }

          .cart-product-image {
            width: 80px;
            height: 100px;

            grid-row: span 2;
          }

          .cart-price {
            font-size: 18px;
          }

          .quantity-button {
            width: 35px;
            height: 35px;
          }

          .quantity {
            display: inline-block;
            margin: 0 5px;
          }

          .item-total {
            margin-left: 0;
            font-size: 18px;
          }

          .remove-button {
            width: 100%;
            padding: 8px;
          }

          .grand-total {
            font-size: 22px;
          }
        }

      `}</style>


      <div className="cart-page">

        <h2 style={{ textAlign: "center" }}>
          My Cart
        </h2>


        {cartItems.length === 0 ? (

          <h4 style={{ textAlign: "center" }}>
            Cart is Empty
          </h4>

        ) : (

          <>

            {/* PRODUCTS */}

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="cart-item"
              >

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt="product"
                  className="cart-product-image"
                />


                {/* PRICE */}

                <h4 className="cart-price">
                  ₹ {item.price}
                </h4>


                {/* PLUS */}

                <button
                  className="quantity-button"
                  onClick={() => handleAdd(item.id)}
                >
                  +
                </button>


                {/* QUANTITY */}

                <p className="quantity">
                  {item.quantity}
                </p>


                {/* MINUS */}

                <button
                  className="quantity-button"
                  onClick={() => handleSub(item.id)}
                >
                  -
                </button>


                {/* TOTAL */}

                <h5 className="item-total">
                  Total: ₹ {item.price * item.quantity}
                </h5>


                {/* REMOVE */}

                <button
                  className="remove-button"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>

              </div>

            ))}


            {/* GRAND TOTAL */}

            <div
              style={{
                textAlign: "center",
                marginTop: "30px",
                padding: "20px",
              }}
            >

              <h3 className="grand-total">
                Grand Total: ₹ {totalPrice}
              </h3>


              <NavLink to="/Form">

                <button
                  style={{
                    background: "green",
                    color: "white",
                    border: "none",
                    padding: "10px 30px",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  Buy
                </button>

              </NavLink>

            </div>

          </>

        )}

      </div>
    </>
  );
};

export default Addcart;