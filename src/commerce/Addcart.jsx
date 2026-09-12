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
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                margin: "20px",
                border: "1px solid gray",
                padding: "10px",
              }}
            >
              <img
                src={item.image}
                alt="product"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
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
                style={{ width: "50px" }}
              >
                -
              </button>

              <h5 style={{ marginLeft: "100px" }}>
                Total: ₹ {item.price * item.quantity}
              </h5>

              <button
                onClick={() => handleRemove(item.id)}
                style={{
                  border: "none",
                  padding: "8px 15px",
                  cursor: "pointer",
                  marginLeft: "auto",
                }}
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
            <h3>
              Grand Total: ₹ {totalPrice}
            </h3>

            <NavLink to="/Form"><button
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
            </button></NavLink>
          </div>
        </>
      )}
    </>
  );
};

export default Addcart;