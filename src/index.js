import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";
 
// I have no idea how to do this (using React).

const Task = (props) => {
  return (
    <div className="task border">
      <label>
        <input type="checkbox" id={props.taskName}></input>
        {props.taskName}
      </label>
      <p>{props.taskDate}</p>
    </div>
  )
}

const Button = (props) => {
  let textField = document.querySelector('input[type="text"]');
  let dateField = document.querySelector('input[type="date"]');

  console.log(textField);
  console.log((textField || {}).value);

  console.log((dateField || {}).value);

  return (
    <button type="button" className="border" onClick={props.setTask("sdsd")}>Add task</button>
  )
}

const App = () => {
   const [tasks, setTasks] = useState([
     { name: "First task", date: new Date().toString()},
   ]);
  const [newTask, setNewTask] = useState("None");
  const [newDate, setNewDate] = useState("None");

  const fSetTasks = () => {
    setTasks({name: newTask, date: newDate});
  }
  
  const fSetNewTask = (newTask) => {
    setNewTask(newTask);
  }

  const fSetNewDate = (date) => {
    setNewDate(date);
  }

  return (
  <div className="container">
    <h1>To-do app</h1>
    <form>
      <input className="border" type="text"></input>
      <input className="border" type="date"></input>
      <Button setTask = {fSetNewTask} setDate = {fSetNewDate} setTasks = {fSetTasks}/>
    </form>
    {tasks.map(task => 
      (<Task key={task.name} taskName={task.name} taskDate={task.date}/>
    ))}
  </div>
  )
}

/* 
function convertTime(pDate) {
  console.log(pDate);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${pDate.getDate()} ${months[pDate.getMonth()]}`
}
*/

ReactDOM.render(<App />, document.getElementById("root"));
