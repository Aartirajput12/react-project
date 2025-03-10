import React, { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, SetEmail] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    console.log(user);
    
  }

  return (
    <div className="text-center pt-5">
      <h1 className="font-semibold text-2xl mb-5">Controller Component</h1>
      <form action="" method="get">
        <input
          onChange={(event) => setName(event.target.value)}
          className="border"
          type="text"
          value={name}
          placeholder="Enter name"
        />
        <br></br>
        <input
          onChange={(event) => setPass(event.target.value)}
          className="border my-4"
          type="text"
          value={pass}
          placeholder="Enter password"
        />
        <br />
        <input
          onChange={(event) => SetEmail(event.target.value)}
          className="border mb-3"
          type="text"
          value={email}
          placeholder="Enter email"
        />
        <br />
        <button className="bg-gray-200 py-2 px-4 cursor-pointer">Submit</button>
        <button
          className="bg-gray-200 py-2 px-4 cursor-pointer ml-4"
          onClick={() => {setName(""); SetEmail(""); setPass("")} }
        >
          Clear
        </button>
        <h1>{name}</h1>
        <h1>{pass}</h1>
        <h1>{email}</h1>
      </form>
    </div>
  );
};

export default FormHandling;
