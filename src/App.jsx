import NavBar from "./components/navbar/navbar"
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Greeting from './components/Greeting/Greeting';
import Card from './components/Memory/Card';
import Stopwatch from './components/Stopwatch/Stopwatch';
import TodoAll from './components/TodoFolder/TodoAll';
import MovieSearch from "./components/MovieSearch/Movies";
import ChangeBackgroundImage from "./components/ChangeBackground/Changebackground";
import { Routes, Route } from 'react-router-dom';

function App() {
  //Vi lägger först in NavBar som konstant ska synas, sedan alla routes som ska synas i navbar. Vi avslutar sedan med ChangeBackgroundImage som styr bakgrundsbilden och själva temat på applikationen.

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects/Greeting" element={<Greeting />} />
        <Route path="/Projects/Memory" element={<Card />} />
        <Route path="/Projects/Stopwatch" element={<Stopwatch />} />
        <Route path="/Projects/TodoAll" element={<TodoAll />} />
        <Route path="/Projects/MovieSearch" element={<MovieSearch />} />
      </Routes>
      <ChangeBackgroundImage />
    </>
  )
}

export default App
