import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handlePayment = (event) => {
    setPaymentMethod(event.target.value);
    setErrorMessage("");
  };

  const handleSubmit = () => {
    if (paymentMethod === "") {
      setErrorMessage("Please select a payment method");
      return;
    }

    alert("Payment Done Successfully!");
    navigate("/Success");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"-60px",
       
      }}
    >
      <div
        style={{
          width: "420px",
          backgroundColor: "white",
          border: "1px solid #ddd",
          borderRadius: "15px",
          padding: "35px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.12)",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#222",
          }}
        >
          Choose Payment Method
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#777",
            marginBottom: "30px",
          }}
        >
          Select your preferred payment option
        </p>

        {/* Cash on Delivery */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginBottom: "15px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          <input
            type="radio"
            name="payment"
            value="Cash on Delivery"
            checked={paymentMethod === "Cash on Delivery"}
            onChange={handlePayment}
          />

         Cash on Delivery
        </label>

        {/* UPI */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginBottom: "15px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          <input
            type="radio"
            name="payment"
            value="UPI"
            checked={paymentMethod === "UPI"}
            onChange={handlePayment}
          />

        UPI / Google Pay
        </label>

        {/* Card */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginBottom: "15px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          <input
            type="radio"
            name="payment"
            value="Credit Card"
            checked={paymentMethod === "Credit Card"}
            onChange={handlePayment}
          />

        Credit / Debit Card
        </label>

        {/* Net Banking */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginBottom: "20px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          <input
            type="radio"
            name="payment"
            value="Net Banking"
            checked={paymentMethod === "Net Banking"}
            onChange={handlePayment}
          />

       Net Banking
        </label>

<p style={{color: "#dc3545" }}> {errorMessage}</p>


        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "13px",
            backgroundColor: "#000",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Continue Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;