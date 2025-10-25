import { useEffect } from 'react';
// useLocation comes from 'react-router-dom'
import { useLocation } from 'react-router-dom'; 

const ScrollToTop = () => {
  // Get the current location object
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the window (x=0, y=0) when the pathname changes
    window.scrollTo(0, 0); 
  }, [pathname]); // The effect runs whenever the pathname (route) changes

  return null; // It doesn't render any UI
};

export default ScrollToTop;
