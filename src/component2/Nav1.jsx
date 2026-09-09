// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// const Nav1 = () => {

//   // const cartItems = useSelector((state) => state.cart.items)

//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">

//         <NavLink className="navbar-brand" to="/">
//           Navbar
//         </NavLink>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse"
//           id="navbarSupportedContent"
//         >

//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/">
//                 Home
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/Use">
//              Use
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/Mount">
//             Mount
//               </NavLink>
//             </li>
         

//           </ul>

//           {/* Cart */}
//           <NavLink
//             to="/cart"
//             style={{
//               position: "relative",
//               marginRight: "40px"
//             }}
//           >

//             <NavLink to="/Add" >
//     <img src="https://cdn-icons-png.flaticon.com/128/17095/17095922.png" style={{ height: "50px" }} alt="cart"/></NavLink>

//             {/* Cart Count */}
//             <span
//               style={{
//                 position: "absolute",
//                 top: "-5px",
//                 right: "-10px",
//                 backgroundColor: "red",
//                 color: "white",
//                 borderRadius: "50%",
//                 width: "22px",
//                 height: "22px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "12px",
//                 fontWeight: "bold"
//               }}
//             >
//               {cartItems.length}
//             </span>

//           </NavLink>

//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Nav1
