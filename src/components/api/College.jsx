import React from "react";
import ClassComponent from "./ClassComponent";

const College = () => {
  return <div style={{ backgroundColor: "orange", padding:10 }}>
    <h2 className="text-2xl font-semibold my-5 py-5 px-3">College Component</h2>
    <ClassComponent/>
  </div>;
};

export default College;
