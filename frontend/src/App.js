import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Hire from "./pages/Hire";
import Join from "./pages/Join";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import MapeachFAQ from "./pages/MapeachFAQ";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/join" element={<Join />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/MapeachFAQ" element={<MapeachFAQ />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
