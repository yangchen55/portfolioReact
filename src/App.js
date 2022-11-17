
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div class="wrapper"> 
      <Hero/>
      <Skills/>
      <Project/>
      <AboutMe/>
      <Contact/>
      <Footer/>
      </div>
 
  )

}

export default App;
