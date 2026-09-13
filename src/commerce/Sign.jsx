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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({ ...formData,[name]: value, });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name ||!formData.password ||!formData.age ||!formData.mobile ||!formData.cpass) {
      setMessage("All fields are required");
      return;
    }

    if (Number(formData.age) < 18) {
      setMessage("Age must be 18 or greater");
      return;
    }

    // Password 6 characters hona chahiye
    if (formData.password.length !== 6) {
      setMessage("Password must be 6 characters");
      return;
    }

    if (formData.mobile.length !== 10) {
      setMessage("Mobile number must be 10 digits");
      return;
    }

    if (formData.cpass !== formData.password) {
      setMessage("Password does not match");
      return;
    }

    // Successful Sign In
    // localStorage.setItem("isLoggedIn", "true");

    localStorage.setItem("userData", JSON.stringify(formData));

    
    navigate("/Log");


  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          border: "2px solid",
          width: "500px",
          height: "600px",
          textAlign: "center",
          marginLeft: "600px",
          paddingTop: "40px",
          fontSize: "20px",
        }}
      >
        Name:
        <br />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <br />
        <br />

        Age:
        <br />

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <br />
        <br />

        Password:
        <br />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <br />
        <br />

        Mobile:
        <br />

        <input
          type="number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />

        <br />
        <br />

        Confirm Password:
        <br />

        <input
          type="password"
          name="cpass"
          value={formData.cpass}
          onChange={handleChange}
        />

        <br />
        <br />

        <p style={{ color: "green" }}>
          {errorMessage}
        </p>

        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Sign;