
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {useState} from 'react'
import "./Styles/theme.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {


const [theme, setTheme] = useState('light');
const changeTheme =() => {
    theme === "light" ? setTheme('dark') :  setTheme('light')
   
}
  
  return (
    <>
  
  <div className={theme}> 
<BrowserRouter>
  <Routes>

    <Route path ="/" index element ={<Hero changeTheme={changeTheme} />} />
    <Route path ="skills" index element ={<Skills changeTheme={changeTheme}/>} />
    <Route path ="projects" index element ={<Project changeTheme={changeTheme} />} />
    <Route path ="about-me" index element ={<AboutMe changeTheme={changeTheme}/>} />
    <Route path ="contact" index element ={<Contact changeTheme={changeTheme}/>} />

  </Routes>
  </BrowserRouter>
      
     
      
 
      </div>
      </>
 
  )

}

export default App;
