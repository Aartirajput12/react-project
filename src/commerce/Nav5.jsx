// import React from 'react'
// import { NavLink } from 'react-router-dom'
// const Nav5 = ({ count }) => {
//   return (
//   <>
//   <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <NavLink className="navbar-brand" href="#">Navbar</NavLink>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" href="#">Link</NavLink>
//         </li>
//         <li className="nav-item dropdown">
//           <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </NavLink>
//           <ul className="dropdown-menu">
//             <li><NavLink className="dropdown-item" to="">Action</NavLink></li>
//             <li><NavLink className="dropdown-item" to="">Another action</NavLink></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><NavLink className="dropdown-item" to="">Something else here</NavLink></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
//         </li>
//       </ul>
      

//       <div style={{ position: "relative" }}>

// <img
//   src="https://cdn-icons-png.flaticon.com/128/4947/4947050.png"
//   style={{
//     height: "50px",
//     cursor: "pointer",
//   }}
//   alt="cart"
// />

// {/* Red Count */}
// {count > 0 && (
//   <span
//     style={{
//       position: "absolute",
//       top: "-5px",
//       right: "-5px",
//       background: "red",
//       color: "white",
//       borderRadius: "50%",
//       width: "25px",
//       height: "25px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "14px",
//       fontWeight: "bold",
//     }}
//   >
//     {count}
//   </span>
// )}

// </div>




//     </div>
//   </div>
// </nav>
//   </>
//   )
// }

// export default Nav5


import React from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Nav5 = ({ count }) => {
  return (
    <>


<style>{` /* ========================= NAVBAR ========================= */ .my-navbar { width: 100%; } .cart-box { position: relative; margin-right: 20px; } .cart-icon { height: 50px; width: 50px; cursor: pointer; display: block; } /* RED COUNT */ .cart-count { position: absolute; top: -10px; right: -7px; background: red; color: white; border-radius: 50%; width: 25px; height: 25px; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; } /* ========================= MOBILE ========================= */ @media (max-width: 576px) { .my-navbar .container-fluid { padding-left: 10px; padding-right: 10px; } .navbar-brand { font-size: 20px; } .cart-box { margin-right: 5px; margin-top: 5px; } .cart-icon { width: 42px; height: 42px; } .cart-count { width: 22px; height: 22px; font-size: 12px; /* icon ke thoda upar */ top: -12px; right: -6px; } } /* ========================= SMALL MOBILE ========================= */ @media (max-width: 375px) { .navbar-brand { font-size: 18px; } .cart-icon { width: 38px; height: 38px; } .cart-count { width: 20px; height: 20px; font-size: 11px; top: -10px; right: -5px; } } `}</style>









      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/link">
                  Link
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                >
                  Dropdown
                </NavLink>
              </li>

            </ul>

            {/* Cart */}
            <div
              style={{
                position: "relative",
                marginRight: "20px",
              }}
            >
              <NavLink to="/Addcart"><img
                src="https://cdn-icons-png.flaticon.com/128/4947/4947050.png"
                alt="cart"
                style={{
                  height: "50px",
                  cursor: "pointer",
                }}
              /></NavLink>

              {/* Red Count */}
              {count > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-5px",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    width: "25px",
                    height: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {count}
                </span>
              )}
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav5;