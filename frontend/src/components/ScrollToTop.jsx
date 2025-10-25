import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // We track the entire location object, not just pathname
  const location = useLocation();

  useEffect(() => {
    // 1. Immediately scroll to top when the effect runs (route change)
    window.scrollTo(0, 0); 

    // 2. Add a small timeout (e.g., 10ms) as a failsafe. 
    //    This is crucial for ensuring the scroll happens 
    //    when clicking the current page link (e.g., Jobs on Jobs page).
    const timer = setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10); 
    
    // Cleanup function to clear the timer if the component unmounts early
    return () => clearTimeout(timer); 
    
  // The effect re-runs on *any* change to the location object (including hash or state)
  // but most importantly, it re-runs reliably on all Link component clicks.
  }, [location]); 

  return null; // This component doesn't render any UI
};

export default ScrollToTop;
