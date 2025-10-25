import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current route's pathname
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the window to the top (coordinates 0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Rerun this effect whenever the route path changes

  // This component renders nothing
  return null;
};

export default ScrollToTop;
