import * as React from "react";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;
  
  const calculateChecked = () => {
    // Function to calculate completed tasks
      const completedtasks = todos.filter((todo)=>todo.checked);
      return completedtasks.length;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
