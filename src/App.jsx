import { useState } from "react";
import "./App.css";
// import State from './components/State';
import Student from "./components/Student";
// import Usestate from './components/Usestate';
import Test1 from "./components/Test1";
import FormHandling from "./components/FormHandling";
import CheckBox from "./components/CheckBox";
import Test2 from "./components/Test2";
import ControllComp from "./components/ControllComp";
import User from "./components/User";
import UserefFunction from "./components/UserefFunction";
import UseFormStatus from "./components/UseFormStatus";
import UseTransitionHook from "./components/useTransitionHook";
import DerivedState from "./components/DerivedState";
import Comp1 from "./components/Comp1";
import UpdatingObjects from "./components/UpdatingObjects";
import UseActionState from "./components/UseActionState";
import ContextData from "./components/api/ContextData";
import College from "./components/api/College";
import ToggleHandle from "./components/toggle/ToggleHandle";
import JsonApi from "./components/api/JsonApi";
import GetMethod from "./components/api/GetMethod";
import UserAdd from "./components/api/UserAdd";
// import { Route, Routes } from "react-router-dom";
// import UserList from "./components/api/UserList";

function App() {
  // const purple = '#8e44ad';
  // const [bg, setBg] = useState(purple);
  // const [name, setName] = useState("click me");

  // const bgChange = () => {
  //   // console.log("clicked");
  //   let newBg = "#34495e";
  //   setBg(newBg);
  //   setName("ouch!!")
  // }

  // const onDoubleClick = () => {
  //   setBg(purple);
  //   setName("ayooo")
  // }

  // const displayName = () => {
  //   alert("displayName function")
  // }
  const [name, setName] = useState("vikram");
  const [subject, setSubject] = useState("");
  // const [user, setUser] = useState('')
  return (
    <>
      {/* <div style={{backgroundColor : bg}}>
        <button className='cursor-pointer border border-amber-50 p-1.5' onClick={bgChange} onDoubleClick={onDoubleClick}>{name}</button>
      </div> */}
      {/* <State/> */}
      {/* <Student name="ananya" email="ananya12@gmail.com"/> */}
      {/* <Usestate/> */}

      {/* <Test1/> */}
      {/* <FormHandling/> */}
      {/* <CheckBox/> */}
      {/* <Test2/> */}
      <ControllComp/>

      {/* <User displayName={displayName}/> */}

      {/* <UserefFunction/> */}
      {/* <UseFormStatus/> */}
      {/* <UseTransitionHook/> */}
      {/* <DerivedState/> */}
      {/* <LiftingState/> */}
      {/* <Comp1 name={name} setName={setName}/> */}
      {/* <Comp1 setUser={setUser}/>
      <Comp2 user={user}/> */}
      {/* <UpdatingObjects/> */}
      {/* <UseActionState/> */}

      {/* Context */}
      {/* <div style={{backgroundColor: 'yellow', padding:10}}>
         <ContextData.Provider value={subject}>
          <select value={subject} onChange={(event) => setSubject(event.target.value)}>
            <option value="">Select Subject</option>
            <option value="Maths">Maths</option>
            <option value="History">History</option>
            <option value="English">English</option>
          </select>
         <h1 className="font-semibold text-4xl px-3 mb-5">Context API</h1>
         <button className="bg-gray-300 p-3 my-2 cursor-pointer" onClick={() => setSubject('')}>Clear Data</button>
         <College/>
         </ContextData.Provider>
        </div>  */}

      {/* <ToggleHandle/> */}
      {/* <GetMethod/> */}

      {/* <JsonApi/> */}
      {/*   <JsonApi/> */}
   
    </>
  );
}

export default App;
