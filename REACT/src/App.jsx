import React from 'react'
import './App.css'

import ReactQuestions from './CODE/ReactQuestions.jsx'
import ReactCounter from './CODE/ReactCounter.jsx'
import TodoList from './CODE/ToDoList.jsx'
import CursorFollow from './CODE/CursorFollow.jsx'
import HelloWorld from './CODE/HelloWorld.jsx'
import JsonServerCrud from './CODE/JsonServerCRUD/JsonCrud.jsx'



function ReactModule() {

  return (

    <>
      <ReactQuestions />
      <HelloWorld />
      <ReactCounter />
      <CursorFollow />
      <TodoList />
      <JsonServerCrud />
    </>
  )
}

export default ReactModule