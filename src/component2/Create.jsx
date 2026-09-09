// // import React, { useState } from "react"
// // import { useNavigate } from "react-router-dom"
// // import axios from "axios"

// // const Create=()=>{
// // const navigate=useNavigate()

// //     const[set,reset]=useState({name:"",email:""})
// // const[error,setError]=useState('')

// //     const change=(e)=>{
// //         const{name,value}=e.target
// //         reset({...set,[name]:value})
// //     }


// //   const header = { "Access-Control-Allow-Origin": "*" };


// //     const handlechange=(e)=>{
// //         e.preventDefault()
// //         if(!set.name || !set.email){
// // setError("enter both field")
// // return false;
// //         }

// //     axios
// //       .post("https://6a85488a9c451dc67a63715b.mockapi.io/crud", {
// //         set: name,
        
// //          header,
// //       })
// //       .then(() => {
// //         navigate("/Read");
// //       });
  

// //         localStorage.setItem("userData", JSON.stringify(set));
// //    navigate("/Read")
// //     }
// //     return(<>
// //     <h1>Create</h1>
// //     <form onSubmit={handlechange}>
// //         Name <br/><br/>
// //         <input type="text"
// //         name="name"
// //         value={set.name}
// //         onChange={change}/><br/>
// // email<br/><br/>
// //         <input type="text"
// //         name="email"
// //         value={set.email}
// //         onChange={change}/><br/>
     

// //      <p>{error}</p>
// //      <button type="submit">submit</button>
// //     </form>
// //     </>)
// // }
// // export default Create










// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Create = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const history = useNavigate();

//   const header = { "Access-Control-Allow-Origin": "*" };

//   const handleSubmit = (e) => {
//     e.preventDefault();
   


//     axios
//       .post("https://6a85488a9c451dc67a63715b.mockapi.io/crud", {
//         name: name,
//         email: email,
//         header,
//       })
//       .then(() => {
//         history("/read");
//       });
//   };

//   return (
//     <>
//     <center>
//    <h3>Create</h3>
//         <form style={{paddingTop:"50px",border:"1px solid",width:"300px",height:"300px",marginTop:"100px"}}>
//           <div class="mb-3">
//             <label class="form-label">Name</label><br/>
//             <input
//               type="text"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div class="mb-3">
//             <label class="form-label">Email address</label><br/>
//             <input
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
//             Submit
//           </button>
//         </form>
//         </center>
//     </>
//   );
// };

// export default Create;