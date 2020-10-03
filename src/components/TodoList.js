import React from 'react';
//Importar components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filterdedTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterdedTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
