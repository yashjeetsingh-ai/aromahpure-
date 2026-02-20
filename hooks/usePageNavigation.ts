import { useEffect } from 'react';

/**
 * Custom hook to handle page navigation events
 * This ensures components can react properly to page transitions
 */
export const usePageNavigation = (callback?: () => void) => {
  useEffect(() => {
    const handlePageNavigation = () => {
      // Execute callback if provided
      if (callback) {
        callback();
      }
      
      // Refresh animations or other page-specific logic
      if (typeof window !== 'undefined') {
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Refresh GSAP animations if they exist
        if ((window as any).ScrollTrigger) {
          (window as any).ScrollTrigger.refresh();
        }
      }
    };

    // Listen for custom page navigation event
    window.addEventListener('pageNavigation', handlePageNavigation);
    
    // Cleanup listener
    return () => {
      window.removeEventListener('pageNavigation', handlePageNavigation);
    };
  }, [callback]);
};