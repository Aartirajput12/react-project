// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import { Link } from "react-router-dom";

// // // const Read = () => {
// // //   const [data, setData] = useState([]);

  
// // //   function getData() {
// // //     axios
// // //       .get("https://6a85488a9c451dc67a63715b.mockapi.io/")
// // //       .then((res) => {
// // //         setData(res.data);
// // //       });
// // //   }


// // //   useEffect(() => {
// // //     getData();
// // //   }, []);

// // //   return (
// // //     <>
// // //       <div className="container">
// // //         <h2>Read Operation</h2>

// // //         <table className="table">
// // //           <thead>
// // //             <tr>
// // //               <th>ID</th>
// // //               <th>Name</th>
// // //               <th>Email</th>
// // //               <th></th>
// // //               <th></th>
// // //             </tr>
// // //           </thead>

// // // <tbody>
// // // {data.map((eachData) => {
// // // return (
// // // <tr key={eachData.id}>
// // //  <th scope="row">{eachData.id}</th>
// // // <td>{eachData.name}</td>
// // // <td>{eachData.email}</td>

// // // <td>                   
// // //  <button className="btn btn-success">Edit</button>
// // // </td>
// // // <td>
// // // <button className="btn btn-danger">Delete</button>
// // // </td>
// // //       </tr>
// // //               );
// // //             })}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Read;

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const Read = () => {
// //   const [data, setData] = useState([]);

// //   const getData = () => {
// //     axios
// //       .get("https://6a85488a9c451dc67a63715b.mockapi.io/crud")
// //       .then((res) => {
// //         console.log(res.data);
// //         setData(res.data);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   };

// //   useEffect(() => {
// //     getData();
// //   }, []);

// //   return (
// //     <div className="container mt-4">
// //       <h2>Read Operation</h2>

// //       <table className="table table-bordered">
// //         <thead>
// //           <tr>
// //             <th>ID</th>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th></th>
// //             <th></th>
// //           </tr>
// //         </thead>

// //         <tbody>
// //           {data.map((eachData) => (
// //             <tr key={eachData.id}>
// //               <td>{eachData.id}</td>
// //               <td>{eachData.name}</td>
// //               <td>{eachData.email}</td>

// //               <td>
// //                 <button className="btn btn-success">
// //                   Edit
// //                 </button>
// //               </td>

// //               <td>
// //                 <button className="btn btn-danger">
// //                   Delete
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Read;




// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";

// // const Read = () => {
// //   const [data, setData] = useState([]);


// //   function getData() {
// //     axios
// //       .get("https://6a85488a9c451dc67a63715b.mockapi.io/crud")
// //       .then((res) => {
// //         setData(res.data);
// //       });
// //   }

// //   function handleDelete(id) {
// //     axios
// //       .delete("https://6a85488a9c451dc67a63715b.mockapi.io/crud/${id}")
// //       .then(() => {
// //         getData();
// //       });
// //   }

// //   const setToLocalStorage = (id, name, email) => {
// //     localStorage.setItem("id", id);
// //     localStorage.setItem("name", name);
// //     localStorage.setItem("email", email);
// //   };

// //   useEffect(() => {
// //     getData();
// //   }, []);
// //   return (
// //     <>
     
// //         <table >
// //           <thead>
// //             <tr>
// //               <th scope="col">#</th>
// //               <th scope="col">Name</th>
// //               <th scope="col">Email</th>
// //               <th scope="col"></th>
// //               <th scope="col"></th>
// //             </tr>
// //           </thead>

// //           {data.map((eachData) => {
// //             return (
// //               <>
// //                 <tbody>
// //                   <tr>
// //                     <th scope="row">{eachData.id}</th>
// //                     <td>{eachData.name}</td>
// //                     <td>{eachData.email}</td>
// //                     <td>
// //                       <Link to="/update">
// //                         <button
// //                           className="btn btn-success"
// //                           onClick={() =>
// //                             setToLocalStorage(
// //                               eachData.id,
// //                               eachData.name,
// //                               eachData.email
// //                             )
// //                           }
// //                         >
// //                           Edit
// //                         </button>
// //                       </Link>
// //                     </td>
// //                     <td>
// //                       <button
// //                         className="btn btn-danger"
// //                         onClick={() => handleDelete(eachData.id)}
// //                       >
// //                         Delete
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 </tbody>
// //               </>
// //             );
// //           })}
// //         </table>
    
// //     </>
// //   );
// // };

// // export default Read;






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Read = () => {
//   const [data, setData] = useState([]);

//   const getData = () => {
//     axios
//       .get("https://6a85488a9c451dc67a63715b.mockapi.io/crud")
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`https://6a85488a9c451dc67a63715b.mockapi.io/crud/${id}`)
//       .then(() => {
//         getData();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const setToLocalStorage = (id, name, email) => {
//     localStorage.setItem("id", id);
//     localStorage.setItem("name", name);
//     localStorage.setItem("email", email);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>Read Operation</h2>

//       <table className="table table-bordered">
//         <thead>
//           <tr style={{textAlign:"center"}}>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th></th>
//             <th></th>
//           </tr>
//         </thead>

//         <tbody style={{textAlign:"center"}}>
//           {data.map((eachData) => (
//             <tr key={eachData.id}>
//               <td>{eachData.id}</td>
//               <td>{eachData.name}</td>
//               <td>{eachData.email}</td>

//               <td>
//                 <Link to="/update">
//                   <button
//                     className="btn btn-success"
//                     onClick={() =>
//                       setToLocalStorage(
//                         eachData.id,
//                         eachData.name,
//                         eachData.email
//                       )
//                     }
//                   >
//                     Edit
//                   </button>
//                 </Link>
//               </td>

//               <td>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleDelete(eachData.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Read;