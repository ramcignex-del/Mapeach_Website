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
import ScrollToTop from './components/ScrollToTop';

// 👇 1. IMPORT NEW SECTOR COMPONENTS (excluding Information Technology, which uses 'Hire') 👇
import HealthTech from './pages/companies/HealthTech';
import Healthcare from './pages/companies/Healthcare';
import Lifesciences from './pages/companies/Lifesciences';
import ElectronicsCommunications from './pages/companies/ElectronicsCommunications';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* This route is preserved and now serves as the 'Information Technology' page. */}
          <Route path="/hire" element={<Hire />} /> 
          <Route path="/join" element={<Join />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/MapeachFAQ" element={<MapeachFAQ />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          
          {/* 👇 2. ADD ROUTES FOR THE REMAINING 4 SECTORS 👇 */}
          <Route 
            path="/companies/healthtech" 
            element={<HealthTech />} 
          />
          <Route 
            path="/companies/healthcare" 
            element={<Healthcare />} 
          />
          <Route 
            path="/companies/lifesciences" 
            element={<Lifesciences />} 
          />
          <Route 
            path="/companies/electronics" 
            element={<ElectronicsCommunications />} 
          />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
