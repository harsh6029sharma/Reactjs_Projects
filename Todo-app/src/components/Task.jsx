import React, { useState } from "react";

const Task = ({ item, handleDelete, index, handleEdit }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setIsEditValue] = useState(item);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const onEditChange = (e) => {
    setIsEditValue(e.target.value);
  };

  const onEditSave = () => {
    handleEdit(index, editValue);
    setIsEditing(false);
  };

  const onEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex w-[700px] flex-row bg-amber-100 justify-between items-center py-3 cursor-pointer mb-2 rounded-2xl">
      <input
        className="mx-3 cursor-pointer"
        type="checkbox"
        onChange={() => handleCheck()}
      />

      <span>
        {isEditing ? (
          <input
            value={editValue}
            onChange={onEditChange}
            className="border p-1 rounded"
            type="text"
          />
        ) : isChecked ? (
          <p className="line-through text-gray-400">{item}</p>
        ) : (
          <p>{item}</p>
        )}
      </span>

      <div className="px-4 mx-3.5">
        <button
          onClick={() => handleDelete(index)}
          className="bg-pink-500 py-2 px-3 rounded-2xl hover:bg-pink-300 cursor-pointer text-white"
        >
          delete
        </button>

        {isEditing ? (
          <button
            onClick={onEditSave}
            className="bg-green-500 py-2 px-3 rounded-2xl hover:bg-green-300 cursor-pointer text-white ml-2"
          >
            save
          </button>
        ) : (
          <button
            onClick={() => onEditClick()}
            className="bg-blue-400 py-2 px-3 rounded-2xl hover:bg-blue-300 cursor-pointer text-white"
          >
            edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
