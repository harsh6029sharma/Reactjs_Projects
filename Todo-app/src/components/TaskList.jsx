import React from "react";
import Task from "./Task";

const TaskList = ({ task, handleDelete, handleEdit }) => {
  return (
    <div className="bg-blue-300 w-200 h-100">
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            <Task
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              index={index}
              item={item}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
