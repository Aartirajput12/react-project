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
<style>{` /* ========================= CART HEADING ========================= */ 
.cart-heading { text-align: center; margin: 20px 0; } 
.empty-cart { text-align: center; } 
/* ========================= CART PRODUCT ========================= */ 
.cart-item { display: flex; align-items: center; gap: 20px; margin: 20px; border: 1px solid gray; padding: 15px; border-radius: 8px; } 
.cart-image { width: 100px; height: 100px; object-fit: cover; border-radius: 5px; } 
.cart-price { margin: 0; min-width: 80px; }
 /* ========================= QUANTITY ========================= */
  .quantity-box { display: flex; align-items: center; gap: 10px; } 
  .quantity-btn { width: 40px; height: 35px; cursor: pointer; border: 1px solid gray; background: white; border-radius: 4px; font-size: 18px; } 
  .quantity-number { margin: 0; min-width: 20px; text-align: center; } 
  /* ========================= ITEM TOTAL ========================= */
   .item-total { margin: 0 0 0 auto; white-space: nowrap; } 
   /* ========================= REMOVE BUTTON ========================= */
    .remove-btn { border: none; padding: 8px 15px; cursor: pointer; background: #f1f1f1; border-radius: 4px; white-space: nowrap; }
     /* ========================= GRAND TOTAL ========================= */
      .grand-total { text-align: center; margin-top: 30px; padding: 20px; } 
      .buy-btn { background: green; color: white; border: none; padding: 10px 30px; font-size: 18px; cursor: pointer; border-radius: 5px; } 
      /* ========================= TABLET ========================= */
       @media (max-width: 992px) { .cart-item { gap: 15px; margin: 15px; } .item-total { margin-left: auto; } }
        /* ========================= MOBILE ========================= */ 
        @media (max-width: 576px) { .cart-heading { font-size: 24px; }
         .cart-item { display: grid; grid-template-columns: 90px 1fr; gap: 12px; margin: 15px 10px; padding: 12px; } 
         .cart-image { width: 90px; height: 100px; grid-row: span 4; } .cart-price { font-size: 18px; } .quantity-box { gap: 8px; } 
         .quantity-btn { width: 35px; height: 32px; } .item-total { margin: 0; font-size: 16px; } 
         .remove-btn { width: fit-content; padding: 7px 12px; } .grand-total { margin-top: 20px; padding: 15px; } 
         .grand-total h3 { font-size: 20px; } .buy-btn { padding: 9px 25px; font-size: 16px; } } 
         /* ========================= SMALL MOBILE ========================= */ 
         @media (max-width: 375px) { .cart-item { grid-template-columns: 75px 1fr; gap: 10px; margin: 10px; padding: 10px; } 
         .cart-image { width: 75px; height: 85px; } .cart-price { font-size: 16px; } 
         .quantity-btn { width: 32px; height: 30px; } .item-total { font-size: 14px; } 
         .remove-btn { font-size: 13px; padding: 6px 10px; } } `}</style>





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
              
            >
              <img
                src={item.image}
                alt="product"
                
              />

              <h4>₹ {item.price}</h4>

              <button
                onClick={() => handleAdd(item.id)}
                style={{ width: "50px" }}
              >
                +
              </button>

              <p style={{ margin: 0 }}>
                {item.quantity}
              </p>

              <button
                onClick={() => handleSub(item.id)}
                
              >
                -
              </button>

              <h5 >
                Total: ₹ {item.price * item.quantity}
              </h5>

              <button
                onClick={() => handleRemove(item.id)}
               
              >
                Remove
              </button>
            </div>
          ))}

          {/* GRAND TOTAL */}
          <div
          
          >
            <h3>
              Grand Total: ₹ {totalPrice}
            </h3>

            <NavLink to="/Form"><button
             
            >
              Buy
            </button></NavLink>
          </div>
        </>
      )}
    </>
  );
};

export default Addcart;












