
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  
  return (
    <div class="wrapper"> 

<BrowserRouter>
  <Routes>

    <Route path ="/" index element ={<Hero />} />
    <Route path ="skills" index element ={<Skills />} />
    <Route path ="projects" index element ={<Project />} />
    <Route path ="about-me" index element ={<AboutMe />} />
    <Route path ="contact" index element ={<Contact/>} />

  </Routes>
  </BrowserRouter>
      
     
      
 
      </div>
 
  )

}

export default App;
