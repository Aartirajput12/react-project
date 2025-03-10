import React, { useEffect, useState } from "react";

const Test1 = () => {
  const [name, setName] = useState("Naman");
  const [color, setColor] = useState("pink");

    const [show, setShow] = useState(true)
    const [val, setVal] = useState("hide")
    const [value, setValue] = useState("")
    const [change, setChange] = useState("")

    const handleChange = () => (
        setVal('show')
    )

    const handleClick = () => (
        setChange(value)
    )

  

  return (
    <>
    <p></p>
      {/* task 1 */}
      <div className="text-center p-5">
        <h1 className="font-semibold text-3xl mb-3 text-blue-600">Task 1</h1>
        <h1>{name}</h1>
        <button
        onClick={()=>setName(name==="Naman"?"Aarti":name==="Aarti"?"shalu":"Naman")}
          className="bg-gray-200 py-2 px-8 mt-4 cursor-pointer"
        >
          Click
        </button>
      </div>

      {/* task 2 */}
      <div className="text-center mt-5">
        <h1 className="font-semibold text-3xl mb-3 ">Task 2</h1>
        <div
          className="p-6 w-[300px] h-[200px] m-auto mb-3"
          style={{ backgroundColor: color }}
        ></div>
        <input
          className="border"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="enter something"
        />
      </div>

      {/* task 3 */}
      <div className="text-center mt-5">
        <h1 className="font-semibold text-3xl mb-3 ">Task 3</h1>
            {show?<p className="w-[50%] m-auto mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          enim assumenda nesciunt repudiandae recusandae exercitationem,
          perspiciatis aliquam consequatur debitis perferendis sequi, sint porro
          vel quasi illum accusamus eius dolorum suscipit! Odit porro vitae hic
          iure sit sequi, nesciunt laboriosam dignissimos.
        </p> : ""}
        <button onClick={() => setShow(!show)} onChange={handleChange} className="bg-gray-200 py-2 px-8 mt-4 cursor-pointer">{show?"hide":"show"}</button>
      </div>

      {/* task 4 */}
      <div className="text-center mt-5">
      <h1 className="font-semibold text-3xl mb-3 ">Task 4</h1>
        <input className="border py-2 mr-3" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter something"/>
        <button onClick={handleClick} className="bg-gray-200 py-2 px-8 mt-4 cursor-pointer">click me</button>
        <p>{change}</p>
      </div>
    </>
  );
};

export default Test1;
