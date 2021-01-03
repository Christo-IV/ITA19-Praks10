import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css"

// Individual task's format/layout
const Task = (props) => {
  return (
    <div className="task border">
      <input type="checkbox" id={props.taskName}></input>
      <label htmlFor={props.taskName}>{props.taskName}</label>
      <p>{props.taskDate}</p>
    </div>
  )
}

// "Add Task" button
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

  // Gets all checked checkboxes
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');

  // Is supposed to somehow see if a task gets checked and then put <em></em> around the task's name.
  // useEffect(() => {
  //   for(let i = 0; i <= checked.length; i++) {
  //     console.log(checked[i]);
  //     checked[i].
  //   };
  // }, [checked]);
   
  // Adds the task to the tasks array.
  const fAddTask = () => {
    let newTaskObject = {};
    newTaskObject.name = newTask;
    newTaskObject.date = new Date(newDate).toDateString();
    setTasks(tasks.concat([newTaskObject]));

    fResetValues();
  }

  // Wipes the stuff written in the inputs.
  const fResetValues = () => {
    const textField = document.querySelector('input[type="text"]');
    const dateField = document.querySelector('input[type="date"]');

    textField.value="";
    dateField.value="";
  }

  // The resulting HTML
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
