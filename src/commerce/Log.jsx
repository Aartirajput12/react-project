// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const Login = () => {
// //   const navigate = useNavigate();

// //   const [loginData, setLoginData] = useState({
// //     name: "",
// //     password: "",
// //   });

// //   const [message, setMessage] = useState("");

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;

// //     setLoginData({
// //       ...loginData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();

// //     // Signup data localStorage se lo
// //     const storedData = localStorage.getItem("userData");

// //     if (!storedData) {
// //       setMessage("Please signup first");
// //       return;
// //     }

// //     const userData = JSON.parse(storedData);

// //     if (!loginData.name || !loginData.password) {
// //       setMessage("Both fields are required");
// //       return;
// //     }

// //     if (loginData.name !== userData.name) {
// //       setMessage("Invalid name");
// //       return;
// //     }

// //     if (loginData.password !== userData.password) {
// //       setMessage("Invalid password");
// //       return;
// //     }

// //     // Login successful
// //     setMessage("Login Successfully");

// //     localStorage.setItem("login", "true");

// //     navigate("/Home");
// //   };

// //   return (
// //     <form
// //       onSubmit={handleSubmit}
// //       style={{
// //         border: "2px solid",
// //         width: "450px",
// //         height: "400px",
// //         textAlign: "center",
// //         marginLeft: "600px",
// //         paddingTop: "60px",
// //         fontSize: "20px",
// //         marginTop: "100px",
// //       }}
// //     >
// //       <h2>Login</h2>

// //       Name:
// //       <br />

// //       <input
// //         type="text"
// //         name="name"
// //         value={loginData.name}
// //         onChange={handleChange}
// //       />

// //       <br />
// //       <br />

// //       Password:
// //       <br />

// //       <input
// //         type="password"
// //         name="password"
// //         value={loginData.password}
// //         onChange={handleChange}
// //       />

// //       <br />
// //       <br />

// //       <p style={{ color: "green" }}>{message}</p>

// //       <button type="submit">Login</button>
// //     </form>
// //   );
// // };

// // export default Login;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [loginData, setLoginData] = useState({
//     name: "",
//     password: "",
//   });

//   const [message, setMessage] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setLoginData({
//       ...loginData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Signup data localStorage se lo
//     const storedData = localStorage.getItem("userData");

//     if (!storedData) {
//       setMessage("Please signup first");
//       return;
//     }

//     const userData = JSON.parse(storedData);

//     if (!loginData.name || !loginData.password) {
//       setMessage("Both fields are required");
//       return;
//     }

//     if (loginData.name !== userData.name) {
//       setMessage("Invalid name");
//       return;
//     }

//     if (loginData.password !== userData.password) {
//       setMessage("Invalid password");
//       return;
//     }

//     // Login successful
//     localStorage.setItem("login", "true");

//     setMessage("Login Successfully");

//     // Login ke baad Home page par jao
//     navigate("/");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{
//         border: "2px solid",
//         width: "450px",
//         height: "400px",
//         textAlign: "center",
//         marginLeft: "600px",
//         paddingTop: "60px",
//         fontSize: "20px",
//         marginTop: "100px",
//       }}
//     >
//       <h2>Login</h2>

//       Name:
//       <br />

//       <input
//         type="text"
//         name="name"
//         value={loginData.name}
//         onChange={handleChange}
//       />

//       <br />
//       <br />

//       Password:
//       <br />

//       <input
//         type="password"
//         name="password"
//         value={loginData.password}
//         onChange={handleChange}
//       />

//       <br />
//       <br />

//       <p style={{ color: "green" }}>{message}</p>

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Input change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Login submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // Signup data localStorage se lo
    const storedData = localStorage.getItem("userData");

    if (!storedData) {
      setMessage("Please signup first");
      return;
    }

    const userData = JSON.parse(storedData);

    // Empty fields check
    if (!loginData.name || !loginData.password) {
      setMessage("Both fields are required");
      return;
    }

    // Name check
    if (loginData.name !== userData.name) {
      setMessage("Invalid name");
      return;
    }

    // Password check
    if (loginData.password !== userData.password) {
      setMessage("Invalid password");
      return;
    }

    // Login successful
    localStorage.setItem("login", "true");

    setMessage("Login Successfully");

    // Login ke baad Home page par jao
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          border: "2px solid #333",
          borderRadius: "10px",
          width: "400px",
          padding: "35px",
          backgroundColor: "white",
          textAlign: "center",
          fontSize: "18px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>
          Login
        </h2>

        {/* Name */}
        <label>Name</label>
        <br />

        <input
          type="text"
          name="name"
          value={loginData.name}
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
          value={loginData.password}
          onChange={handleChange}
          style={{
            width: "90%",
            padding: "10px",
            marginTop: "5px",
          }}
        />

        <br />

        {/* Login Message */}
        <p
          style={{
            color: message === "Login Successfully" ? "green" : "red",
            fontSize: "16px",
            margin: "20px 0",
          }}
        >
          {message}
        </p>

        {/* Login Button */}
        <button
          type="submit"
          style={{
            padding: "10px 30px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

