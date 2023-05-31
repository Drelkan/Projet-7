import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import "./sass/main.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/a-propos" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
