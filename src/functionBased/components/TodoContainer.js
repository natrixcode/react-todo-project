import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar";
 
const TodoContainer = () => {

  const [todos, setTodos] = useState(getInitialTodos())

  // useEffect(() => {
  //   // getting stored items
  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)

  //   if (loadedTodos) {
  //     setTodos(loadedTodos)
  //   }
  // }, [])

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || [] 
  }
 
  const handleChange = id => {
    setTodos(prevState => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  };

  const addTodoItem = title => {
    const newTodo = {    
      id: uuidv4(),    
      title: title,    
      completed: false  
    };
    setTodos([...todos, newTodo])
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  return (   
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList 
                todos={todos} 
                handleChangeProps={handleChange} 
                deleteTodoProps={delTodo}
                setUpdate ={setUpdate} 
              />
            </div>
          </div>
          
        </Route>
        <Route path= "/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
}

export default TodoContainer



// Компонент Route відповідає за відтворення інтерфейсу користувача, 
// коли його шлях збігається з поточною URL-адресою. 
// Як ви можете бачити в коді, path вказує на домашню сторінку. 
// Таким чином, він рендерить елементи JSX.

// Ця path властивість використовується для визначення частини 
// URL-адреси, якій має відповідати маршрутизатор. 
// Якщо перегляд змінюється, він може більше не відповідати шляху. 
// У цьому випадку він відображає значення NULL.

// Зауважте: відповідність тут стосується початку URL-адреси.
// У цьому випадку шлях маршруту, «/» у коді вище, завжди відповідатиме
// будь-якій URL-адресі. Ось чому, якщо ви перейдете на 
// http://localhost:3000/about , ваша програма все одно відображатиме 
// інтерфейс користувача. Ви можете вирішити це, додавши exact до маршруту так: 
// <Route exact path="/"> 