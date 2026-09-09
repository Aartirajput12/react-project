

import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "purple",
          color: "white",
          marginTop: "50px",
          padding: "50px 80px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {/* ABOUT */}
          <div style={{ maxWidth: "250px" }}>
            <h3 style={{ color: "#f8b4c8" }}>Women Fashion</h3>

            <p style={{ color: "#cccccc" }}>
              Discover the latest fashion trends and shop beautiful
              women's clothing for every occasion.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4>Quick Links</h4>

            <p style={{ color: "#cccccc", cursor: "pointer" }}>
              Home
            </p>

            <p style={{ color: "#cccccc", cursor: "pointer" }}>
              New Arrivals
            </p>

            <p style={{ color: "#cccccc", cursor: "pointer" }}>
              Dresses
            </p>

            <p style={{ color: "#cccccc", cursor: "pointer" }}>
              My Cart
            </p>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h4>Customer Service</h4>

            <p style={{ color: "#cccccc" }}>
              Contact Us
            </p>

            <p style={{ color: "#cccccc" }}>
              Shipping & Delivery
            </p>

            <p style={{ color: "#cccccc" }}>
              Returns & Exchange
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4>Contact Us</h4>

            <p style={{ color: "#cccccc" }}>
              📧 womenfashion@gmail.com
            </p>

            <p style={{ color: "#cccccc" }}>
              📞 +91 98765 43210
            </p>

            <p style={{ color: "#cccccc" }}>
              📍 India
            </p>
          </div>
        </div>

        <hr
          style={{
            borderColor: "#555",
            marginTop: "30px",
          }}
        />

        {/* COPYRIGHT */}
        <div
          style={{
            textAlign: "center",
            color: "#cccccc",
            paddingTop: "10px",
          }}
        >
          © 2026 Women Fashion 
        </div>
      </footer>
    </>
  );
};

export default Footer;