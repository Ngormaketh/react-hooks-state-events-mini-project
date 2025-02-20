import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.text} className="task">
          <div className="task-details">
            <span className="task-text">{task.text}</span>
            <span className="task-category">{task.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
