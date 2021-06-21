import React from "react";
import "./App.css";

import { useState } from "react";

import { Form } from "./components/Form";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Array<string>>([]);

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTasks([...tasks, newTask]);
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <p>Well that's weird but it looks like the tests are working!</p>
      </header>
      <main>
        <Form
          newTask={newTask}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        {tasks.length < 0 ? (
          <div>WIECEJ</div>
        ) : (
          tasks.map((task) => {
            return <p>{task}</p>;
          })
        )}
      </main>
    </div>
  );
}

export default App;
