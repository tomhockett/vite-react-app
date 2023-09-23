import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import SubHeading from './SubHeading.jsx'
import TodoList from './TodoList.jsx'
import PeopleLIst from './PeopleList.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <SubHeading />
    <TodoList />
  <PeopleLIst />
  </React.StrictMode>,
)
