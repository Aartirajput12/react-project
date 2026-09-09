// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Update = () => {
//   const navigate = useNavigate();

//   const [name, setName] = useState(localStorage.getItem("name") );
//   const [email, setEmail] = useState(localStorage.getItem("email") );

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     const id = localStorage.getItem("id");

//     axios
//       .put(
//         `https://6a85488a9c451dc67a63715b.mockapi.io/crud/${id}`,
//         {
//           name: name,
//           email: email,
//         }
//       )
//       .then((res) => {
//         console.log(res.data);

//         // Go back to Read page
//         navigate("/read");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Update User</h2>

//       <form onSubmit={handleUpdate} style={{paddingTop:"50px"}}>
//         <div className="mb-3">
//           <label>Name: </label>

//           <input style={{width:"300px"}}
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label>Email:</label>

//           <input style={{width:"300px"}}
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <button type="submit" className="btn btn-warning">
//           Update
//         </button>

// <button type="button" className="btn btn-dark mx-2" onClick={() => navigate("/read")}>
//   Back
// </button>

//       </form>
//     </div>
//   );
// };

// export default Update;






 