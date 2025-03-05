
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import './App.css'
import Button from './Components/Button';

const Route1 = () => (
  <div>
    <h1>Route 1</h1> 
    <nav>
    <NavLink to="/">Route 1</NavLink> | {' '}
    <NavLink to="/route2">Route 2</NavLink>
    </nav>
    <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magnam sint molestias. Aliquid, nihil. Quisquam nisi ullam excepturi vel sequi, fugiat iusto, totam dolores architecto expedita, laudantium quam iste dolore.</p>
  </div>
);

const Route2 = () => (
  <div>
    <h1>Route 2</h1> 
    <nav>
    <NavLink to="/">Route 1</NavLink> | {' '}
    <NavLink to="/route2">Route 2</NavLink>
    </nav>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magnam sint molestias. Aliquid, nihil. Quisquam nisi ullam excepturi vel sequi, fugiat iusto, totam dolores architecto expedita, laudantium quam iste dolore.</p>
  </div>
);

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Route1 />} />
        <Route path="/route2" element={<Route2 />} /> 
      </Routes>
    </Router>
    </>
  )
}

export default App
