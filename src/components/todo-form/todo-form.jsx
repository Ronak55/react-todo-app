import * as React from "react";
import "./todo-form.scss";

export const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      // Calculate the ID for the new todo
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

      // Create a new todo object
      const newTodo = {
        id: newId,
        label: task,
        checked: false,
      };

      // Update the todos list with the new todo
      setTodos([...todos, newTodo]);

      // Clear the task input
      setTask("");
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input placeholder="Enter new task" value={task} onChange={(e) => setTask(e.target.value)} onKeyUp={handleKeyUp} />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
