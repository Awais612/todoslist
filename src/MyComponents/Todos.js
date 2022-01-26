import React from 'react';
import { Todo } from '../MyComponents/Todo'

export const Todos = (props) => {
  let containerStyling={
    minHeigh:"70vh ",
    margin:"50px auto"
  }
  return (
    <div className='container' style={containerStyling}>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length === 0 ? "Hooray! All Tasks are Done." :
          props.todos.map((todo) => {
            return( 
            <>
               <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr/>
            </>
            )
            })
      }
    </div>);
};