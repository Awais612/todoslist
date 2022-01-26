import React from 'react';

export const Todo = ({todo, onDelete}) => {
  return(
  <div>
      <h4>{todo.job}</h4>
      <p>{todo.description}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Done</button>
  </div>);
};
