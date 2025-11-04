import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import Hire from "./pages/Hire";
import Join from "./pages/Join";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import MapeachFAQ from "./pages/MapeachFAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Enquiry from "./pages/Enquiry";

// Sector Pages
import InformationTechnology from './pages/companies/InformationTechnology';
import HealthTech from './pages/companies/HealthTech';
import Lifesciences from './pages/companies/Lifesciences';
import ElectronicsCommunications from './pages/companies/ElectronicsCommunications';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <ScrollToTop />
        
        {/* Move spacing control inside individual pages */}
        <Routes>
          {/* Home: no global padding, since banner already accounts for it */}
          <Route path="/" element={<Home />} />

          {/* All other pages: add top padding to offset navbar */}
          <Route path="/hire" element={<div className="pt-16"><Hire /></div>} />
          <Route path="/join" element={<div className="pt-16"><Join /></div>} />
          <Route path="/pricing" element={<div className="pt-16"><Pricing /></div>} />
          <Route path="/about" element={<div className="pt-16"><About /></div>} />
          <Route path="/contact" element={<div className="pt-16"><Contact /></div>} />
          <Route path="/jobs" element={<div className="pt-16"><Jobs /></div>} />
          <Route path="/MapeachFAQ" element={<div className="pt-16"><MapeachFAQ /></div>} />
          <Route path="/PrivacyPolicy" element={<div className="pt-16"><PrivacyPolicy /></div>} />
          <Route path="/enquiry" element={<div className="pt-16"><Enquiry /></div>} />

          {/* Sector Routes */}
          <Route path="/companies/informationtechnology" element={<div className="pt-16"><InformationTechnology /></div>} />
          <Route path="/companies/healthtech" element={<div className="pt-16"><HealthTech /></div>} />
          <Route path="/companies/lifesciences" element={<div className="pt-16"><Lifesciences /></div>} />
          <Route path="/companies/electronics" element={<div className="pt-16"><ElectronicsCommunications /></div>} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
