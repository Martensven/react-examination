import NavBar from "./components/navbar/navbar"
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Greeting from './components/Greeting/Greeting';
import Card from './components/Memory/Card';
import Stopwatch from './components/Stopwatch/Stopwatch';
import TodoAll from './components/TodoFolder/TodoAll';
import ChangeBackgroundImage from "./components/ChangeBackground/Changebackground";
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/react-examination/Home" element={<Home />} />
        <Route path="/react-examination/About" element={<About />} />
        <Route path="/react-examination/Projects" element={<Projects />} />
        <Route path="/react-examination/Contact" element={<Contact />} />
        <Route path="/react-examination/Projects/Greeting" element={<Greeting />} />
        <Route path="/react-examination/Projects/Memory" element={<Card />} />
        <Route path="/react-examination/Projects/Stopwatch" element={<Stopwatch />} />
        <Route path="/react-examination/Projects/TodoAll" element={<TodoAll />} />
      </Routes>
      <ChangeBackgroundImage />
    </>
  )
}

export default App
