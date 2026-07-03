import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import FinalCTA from '../components/FinalCTA';

export const MainLayout = () => {
  const { pathname } = useLocation();

  // Scroll restoration
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      {/* Premium Background Mesh Container */}
      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
        <div className="mesh-blob blob-3"></div>
        <div className="mesh-blob blob-4"></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '100px' }}>
          <Outlet />
        </main>
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
};
