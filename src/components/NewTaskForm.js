import React, { useState } from "react";

function NewTaskList({ onAddTask }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    onAddTask({ text, category }); // Pass new task to parent (App)
    setText(""); // Clear input field
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Code">Code</option>
        <option value="Food">Food</option>
        <option value="Work">Work</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskList;
