import React from 'react'
import './App.css'

import ReactQuestions from './JSX CODE/ReactQuestions.jsx'
import ReactCounter from './JSX CODE/ReactCounter.jsx'
import ToDoList from './JSX CODE/ToDoList.jsx'
import TodoList from './JSX CODE/ToDoList.jsx'
import CursorFollow from './JSX CODE/CursorFollow.jsx'
import HelloWorld from './JSX CODE/HelloWorld.jsx'



function ReactModule() {

  return (

    <>
      <ReactQuestions />
      <HelloWorld />
      <ReactCounter />
      <CursorFollow />
      <TodoList />
    </>
  )
}

export default ReactModule