import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css"

const Task = (props) => {
  return (
    <div className="task border">
      <input type="checkbox" id={props.taskName}></input>
      <label htmlFor={props.taskName}>{props.taskName}</label>
      <p>{props.taskDate}</p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button type="button" className="border" onClick={props.addTask}>Add task</button>
  )
}

const App = () => {
   const [tasks, setTasks] = useState([
     { name: "First task", date: new Date().toDateString()},
   ]);
  const [newTask, setNewTask] = useState("None");
  const [newDate, setNewDate] = useState("None");

  const checked = document.querySelectorAll('input[type="checkbox"]:checked');

  // useEffect(() => {
  //   for(let i = 0; i <= checked.length; i++) {
  //     console.log(checked[i]);
  //     checked[i].
  //   };
  // }, [checked]);

  const fAddTask = () => {
    let newTaskObject = {};
    newTaskObject.name = newTask;
    newTaskObject.date = new Date(newDate).toDateString();
    setTasks(tasks.concat([newTaskObject]));

    fResetValues();
  }

  const fResetValues = () => {
    const textField = document.querySelector('input[type="text"]');
    const dateField = document.querySelector('input[type="date"]');

    textField.value="";
    dateField.value="";
  }

  return (
  <div className="container">
    <h1>To-do app</h1>
    <form>
      <input className="border" type="text" onChange={(event) => {setNewTask(event.target.value)}}></input>
      <input className="border" type="date" onChange={(event) => {setNewDate(event.target.value)}}></input>
      <Button addTask = {fAddTask}/>
    </form>
    {tasks.map(task => 
      (<Task key={task.name} taskName={task.name} taskDate={task.date}/>
    ))}
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
