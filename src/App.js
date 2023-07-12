import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Logement from "./pages/Logement"
import NotFound from "./pages/NotFound"
import "./sass/main.scss"
import "./sass/index.scss"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/a-propos" element={<About/>}/>
        <Route path='/logement/:id' element={<Logement/>}/>
        <Route path='/not-found' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
