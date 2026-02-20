'use client';

import { useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Force a refresh when pathname changes
    if (typeof window !== 'undefined') {
      // Scroll to top on navigation
      window.scrollTo(0, 0);

      // Refresh ScrollTrigger if it exists
      if ((window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.refresh();
      }

      // Dispatch a custom event for components to listen to
      window.dispatchEvent(new CustomEvent('pageNavigation'));
    }
  }, [pathname]);

  useEffect(() => {
    const handleLoad = () => {
      if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.refresh();
      }
    };
    handleLoad();
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return <>{children}</>;
}
