import React, { useState, useEffect } from 'react';
import './App.css';
//Importando components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //State stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterdedTodos, setFilteredTodo] = useState([]);

  //RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  //Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions and events
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodo(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodo(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodo(todos);
        break;
    }
  };

  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Lista de To do do Fred</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filterdedTodos={filterdedTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
