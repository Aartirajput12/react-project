import React, { useState } from "react";

const Student = ({name, email}) => {

const [val, setVal] = useState(" ")

  
  return (
    <>
      {/* <div className="text-center m-auto font-semibold text-2xl">
        <h1>Props in React :</h1>
        <p>Hello {name}</p>
        <p>Email : {email}</p>
      </div> */}

        <div>
          <input  type="text" value={val} onChange={(e) => setVal(e.target.value)} placeholder="enter something"/>
          <h1>{val}</h1>
          <button onClick={() => setVal("")}>click me</button>
        </div>
      
    </>
  );
};

export default Student;
