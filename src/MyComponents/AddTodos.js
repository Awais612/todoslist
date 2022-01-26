import  { useState } from "react";
export const AddTodos = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description can not be empty!.");
    }
    else{
    addTodo(title,description);
    setTitle("");
    setDescription("");
    }   
  }
  return (
    <div className="container my-3">
      <h3 className="text-center">Add Your Todo Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo's Title
          </label>
          <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Todo's Description
          </label>
          <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" id="Description" />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
