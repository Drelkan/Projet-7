import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

import Home from "./pages/Home";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./sass/main.scss";
import "./sass/index.scss";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.LOGEMENT} element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
