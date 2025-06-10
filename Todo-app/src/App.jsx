import React from "react";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";
import { useState } from "react";

const App = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleEdit = (index, newValue) => {
    const updatedTask = task.map((item, i) => (i === index ? newValue : item));
    setTask(updatedTask);
  };

  const handleClick = () => {
    setTask([...task, inputValue]);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (index) => {
    const updatedTask = task.filter((_, i) => i !== index); // Remove by index
    setTask(updatedTask);
  };

  return (
    <center className="flex justify-center my-auto relative top-[40px]">
      <div>
        <Header />
        <InputBox
          handleclick={handleClick}
          handlechange={handleChange}
          value={inputValue}
        />
        <TaskList
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          task={task}
        />
      </div>
    </center>
  );
};

export default App;
