import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AnimalList from "./AnimalList.jsx";
import Greeting from './Greeting.jsx'
import SubHeading from './SubHeading.jsx'
import TodoList from './TodoList.jsx'
import PeopleLIst from './PeopleList.jsx'
import Button from "./Button.jsx";
import ColorPicker from "./ColorPicker.jsx";
import Gallery from "./Gallery.jsx";
import Person from "./Person.jsx";
import './index.css'

const handleButtonClick = (url) => {
  window.location.href = url;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <SubHeading />
    <TodoList />
    <PeopleLIst />
    <AnimalList />
    <div>
      <Button handleClick={handleButtonClick}/>
    </div>
    <ColorPicker />
    <Gallery />
    <Person />
  </React.StrictMode>,
)
