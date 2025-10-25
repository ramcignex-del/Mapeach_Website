import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Hire from "./pages/Hire";
import Join from "./pages/Join";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import MapeachFAQ from "./pages/MapeachFAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/join" element={<Join />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/MapeachFAQ" element={<MapeachFAQ />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
