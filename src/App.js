import React from "react";
import GoalList from "./components/GoalList/GoalList";
import "./App.css"
const App = () => {
  const coursearr=[
    {id:'C', text:'C course'},
   { id:'TOC', text:'logic  course'},
    {id:'DSA', text:' dsa course'},
    {id:'JAVA', text:'java  course'}


  ];

  return (
    <div className="appDiv">
      <h1>React Libraries</h1>
      <GoalList subject={coursearr} />
    </div>
  );
};

export default App;

