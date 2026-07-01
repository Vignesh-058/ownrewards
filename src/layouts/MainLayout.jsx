import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CursorGlow from '../components/CursorGlow';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';

const MainLayout = () => {
  const location = useLocation();
  
  return (
    <div className="landing-page">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default MainLayout;
