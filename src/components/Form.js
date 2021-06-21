export const Form = ({ handleSubmit, handleChange, newTask }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="addTask">Add task</label>
        <input
          type="text"
          id="addTask"
          value={newTask}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add a new task</button>
    </form>
  );
};
