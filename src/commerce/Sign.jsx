
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const navigate = useNavigate();

  const [formData, setData] = useState({
    name: "",
    password: "",
    age: "",
    mobile: "",
    cpass: "",
  });

  const [errorMessage, setMessage] = useState("");

  // Input change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({
      ...formData,
      [name]: value,
    });
  };

  // Form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check empty fields
    if (!formData.name ||!formData.password ||!formData.age ||!formData.mobile ||!formData.cpass) {
      setMessage("All fields are required");
      return;
    }

    // Check age
    if (Number(formData.age) < 18) {
      setMessage("Age must be 18 or greater");
      return;
    }

    // Check password length
    if (formData.password.length !== 6) {
      setMessage("Password must be 6 characters");
      return;
    }

    // Check mobile number
    if (formData.mobile.length !== 10) {
      setMessage("Mobile number must be 10 digits");
      return;
    }

    // Check confirm password
    if (formData.cpass !== formData.password) {
      setMessage("Password does not match");
      return;
    }

    // Save user data
    localStorage.setItem("userData", JSON.stringify(formData));

    // Go to Login page
    navigate("/Log");
  };

  return (
    <div
      style={{display: "flex",justifyContent: "center", alignItems: "center",minHeight: "100vh",backgroundColor: "#f5f5f5",}}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          border: "2px solid #333",
          borderRadius: "10px",
          width: "400px",
          padding: "30px",
          backgroundColor: "white",
          textAlign: "center",
          fontSize: "18px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginBottom: "25px" }}>
          Sign Up
        </h2>

        {/* Name */}
        <label>Name</label>
        <br />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: "90%",
            padding: "10px",
            marginTop: "5px",
          }}
        />

        <br />
        <br />

        {/* Age */}
        <label>Age</label>
        <br />

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          style={{
            width: "90%",
            padding: "10px",
            marginTop: "5px",
          }}
        />

        <br />
        <br />

        {/* Password */}
        <label>Password</label>
        <br />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{
            width: "90%",
            padding: "10px",
            marginTop: "5px",
          }}
        />

        <br />
        <br />

        {/* Mobile */}
        <label>Mobile</label>
        <br />

        <input
          type="number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          style={{
            width: "90%",
            padding: "10px",
            marginTop: "5px",
          }}
        />

        <br />
        <br />

        {/* Confirm Password */}
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          name="cpass"
          value={formData.cpass}
          onChange={handleChange}
          style={{
            width: "90%",
            padding: "10px",
            marginTop: "5px",
          }}
        />

        <br />

        {/* Error Message */}
        <p style={{color: "red",fontSize: "16px",margin: "15px 0", }} >{errorMessage} </p>

        {/* Submit Button */}
        <button type="submit" style={{ padding: "10px 30px",fontSize: "16px", cursor: "pointer",}} > Submit</button>
      </form>
    </div>
  );
};

export default Sign;











































// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Sign = () => {
//   const navigate = useNavigate();

//   const [formData, setData] = useState({
//     name: "",
//     password: "",
//     age: "",
//     mobile: "",
//     cpass: "",
//   });

//   const [errorMessage, setMessage] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setData({ ...formData,[name]: value, });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!formData.name ||!formData.password ||!formData.age ||!formData.mobile ||!formData.cpass) {
//       setMessage("All fields are required");
//       return;
//     }

//     if (Number(formData.age) < 18) {
//       setMessage("Age must be 18 or greater");
//       return;
//     }

//     // Password 6 characters hona chahiye
//     if (formData.password.length !== 6) {
//       setMessage("Password must be 6 characters");
//       return;
//     }

//     if (formData.mobile.length !== 10) {
//       setMessage("Mobile number must be 10 digits");
//       return;
//     }

//     if (formData.cpass !== formData.password) {
//       setMessage("Password does not match");
//       return;
//     }

//     // Successful Sign In
//     // localStorage.setItem("isLoggedIn", "true");

//     localStorage.setItem("userData", JSON.stringify(formData));

    
//     navigate("/Log");


//   };

//   return (
//     <>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           border: "2px solid",
//           width: "500px",
//           height: "600px",
//           textAlign: "center",
//           marginLeft: "600px",
//           paddingTop: "40px",
//           fontSize: "20px",
//         }}
//       >
//         Name:
//         <br />

//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <br />
//         <br />

//         Age:
//         <br />

//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//         />

//         <br />
//         <br />

//         Password:
//         <br />

//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <br />
//         <br />

//         Mobile:
//         <br />

//         <input
//           type="number"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//         />

//         <br />
//         <br />

//         Confirm Password:
//         <br />

//         <input
//           type="password"
//           name="cpass"
//           value={formData.cpass}
//           onChange={handleChange}
//         />

//         <br />
//         <br />

//         <p style={{ color: "green" }}>
//           {errorMessage}
//         </p>

//         <button type="submit">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default Sign;