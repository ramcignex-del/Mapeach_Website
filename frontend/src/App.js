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
import PrivacyPolicy from "./pages/Pricing";
import ScrollToTop from './components/ScrollToTop';

// 👇 1. IMPORT THE RENAMED COMPONENT AND ALL OTHER SECTOR COMPONENTS 👇
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
        <Routes>
          <Route path="/" element={<Home />} />

                   
          {/* 👇 2. UPDATED ROUTE for Information Technology (formerly /hire) */}
          <Route 
            path="/companies/informationtechnology" 
            element={<InformationTechnology />} 
          /> 
          
          {/* 👇 3. ROUTES FOR REMAINING 4 SECTORS */}
          <Route 
            path="/companies/healthtech" 
            element={<HealthTech />} 
          />
       {/*     
          <Route 
            path="/companies/healthcare" 
            element={<Healthcare />} 
          />
        */}
          
          <Route 
            path="/companies/lifesciences" 
            element={<Lifesciences />} 
          />
          <Route 
            path="/companies/electronics" 
            element={<ElectronicsCommunications />} 
          />
          {/* ⬆️ ALL SECTOR ROUTES ARE NOW UNDER /COMPANIES/ ⬆️ */}

          {/* Existing main routes remain untouched */}
          <Route path="/hire" element={<Hire />} />
          <Route path="/join" element={<Join />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/MapeachFAQ" element={<MapeachFAQ />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
