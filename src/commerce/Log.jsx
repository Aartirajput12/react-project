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
//     setMessage("Login Successfully");

//     localStorage.setItem("login", "true");

//     navigate("/Home");
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Signup data localStorage se lo
    const storedData = localStorage.getItem("userData");

    if (!storedData) {
      setMessage("Please signup first");
      return;
    }

    const userData = JSON.parse(storedData);

    if (!loginData.name || !loginData.password) {
      setMessage("Both fields are required");
      return;
    }

    if (loginData.name !== userData.name) {
      setMessage("Invalid name");
      return;
    }

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
    <form
      onSubmit={handleSubmit}
      style={{
        border: "2px solid",
        width: "450px",
        height: "400px",
        textAlign: "center",
        marginLeft: "600px",
        paddingTop: "60px",
        fontSize: "20px",
        marginTop: "100px",
      }}
    >
      <h2>Login</h2>

      Name:
      <br />

      <input
        type="text"
        name="name"
        value={loginData.name}
        onChange={handleChange}
      />

      <br />
      <br />

      Password:
      <br />

      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
      />

      <br />
      <br />

      <p style={{ color: "green" }}>{message}</p>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

