import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';

import Home from "./pages/Home";
import Hire from "./pages/Hire";
import Join from "./pages/Join";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import MapeachFAQ from "./pages/MapeachFAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Sector Pages
import InformationTechnology from './pages/companies/InformationTechnology';
import HealthTech from './pages/companies/HealthTech';
// import Healthcare from './pages/companies/Healthcare';
import Lifesciences from './pages/companies/Lifesciences';
import ElectronicsCommunications from './pages/companies/ElectronicsCommunications';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <ScrollToTop />
        {/* Wrapper to prevent content being hidden behind fixed navbar */}
        <div className="pt-16">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/join" element={<Join />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/MapeachFAQ" element={<MapeachFAQ />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

            {/* Sector Routes */}
            <Route path="/companies/informationtechnology" element={<InformationTechnology />} />
            <Route path="/companies/healthtech" element={<HealthTech />} />
            {/* <Route path="/companies/healthcare" element={<Healthcare />} /> */}
            <Route path="/companies/lifesciences" element={<Lifesciences />} />
            <Route path="/companies/electronics" element={<ElectronicsCommunications />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
