import React, { useState } from "react";

const ControllComp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [data, setData] = useState([]);
  const [id, setid] = useState(null);

  const handleEdit = (item, i) => {
    setName(item.name);
    setSubject(item.subject);
    setEmail(item.email);
    setid(i);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (id === null) {
      const newEntry = { name, email, subject };
      setData([...data, newEntry]);
    } else {
      let updateData = data.map((item, i) => {
        if (i === id) {
          item.name = name;
          item.subject = subject;
          item.email = email;
        }
        return item;
      });
      setData(updateData);
      setid(null)
    }

    setName(""), setSubject(""), setEmail("");
  };

  const handleClear = () => {
    setName("");
    setSubject("");
    setEmail("");
  };

  const handleRemove = (index) => {
    const updateEntries = data.filter((_, i) => i !== index);
    setData(updateEntries);
  };

  return (
    <div className="p-5">
      <h1 className="font-semibold text-2xl mb-5">
        Controller-Uncontrolled Component
      </h1>
      <form action="" method="get">
        <input
          onChange={(event) => setName(event.target.value)}
          className="border"
          type="text"
          value={name}
          placeholder="Enter name"
        />
        <br />  
        <input
          onChange={(event) => setSubject(event.target.value)}
          className="border my-4"
          type="text"
          value={subject}
          placeholder="Enter subject"
        />
        <br />
        <input
          onChange={(event) => setEmail(event.target.value)}
          className="border mb-3"
          type="text"
          value={email}
          placeholder="Enter email"
        />
        <br />
        <button
          onClick={handleClick}
          className="bg-pink-200 py-2 px-4 cursor-pointer"
        >
          {id === null ? "Submit" : "Update"}
        </button>
        <button
          type="button"
          className="bg-purple-300 py-2 px-4 cursor-pointer ml-4"
          onClick={() => handleClear()}
        >
          Clear
        </button>
      </form>


      {data.length > 0 && (
        <div className="mt-5 flex text-center ">
          {data.map((entry, index) => (
            <div key={index} className="mt-2 ml-10">
              <h3>
                <span className="text-lg font-semibold">Name:</span>{" "}
                {entry.name}
              </h3>
              <h3>
                <span className="text-lg font-semibold">Subject:</span>{" "}
                {entry.subject}
              </h3>
              <h3>
                <span className="text-lg font-semibold">Email:</span>{" "}
                {entry.email}
              </h3>
              <button
                className="bg-amber-300 py-2 px-4 cursor-pointer ml-4 mt-3"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>

              <button
                className="bg-blue-300 py-2 px-4 cursor-pointer ml-4 mt-3"
                onClick={() => handleEdit(entry, index)}
              >
                Update
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ControllComp;
