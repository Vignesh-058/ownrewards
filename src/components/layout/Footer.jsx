import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

export const Footer = () => {
  return (
    <footer id="main-footer" className="footer relative overflow-hidden bg-white dark:bg-[#0f1117] pt-[100px] pb-[32px] border-t border-gray-100 dark:border-gray-800">
      <div className="container relative z-10">
        <div className="footer-container flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          
          {/* Brand Column */}
          <div className="footer-brand max-w-sm">
            <div className="footer-logo mb-4">
              <Logo size={32} />
            </div>
            <p className="footer-tagline text-slate-500 dark:text-slate-400 mb-8">
              Intelligent loyalty for growing businesses.
            </p>
            
            <div className="footer-ecosystem p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
              <span className="ecosystem-label block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Part of the iEyal ecosystem:
              </span>
              <div className="ecosystem-links grid grid-cols-2 gap-3">
                <a href="#" className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary-light transition-colors">
                  <div className="w-4 h-4 rounded-full bg-blue-500" /> ownChat
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-primary dark:text-primary-light">
                  <div className="w-4 h-4 rounded-full bg-primary" /> ownRewards
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary-light transition-colors">
                  <div className="w-4 h-4 rounded-full bg-orange-500" /> ownCart
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary-light transition-colors">
                  <div className="w-4 h-4 rounded-full bg-green-500" /> ownTask
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links flex-1 flex flex-wrap gap-12 justify-between">
            <div className="footer-col flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Product</h4>
              <Link to="/features" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors">Features</Link>
              <Link to="/how-it-works" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors">How It Works</Link>
              <Link to="/analytics" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors">Analytics</Link>
              <Link to="/pricing" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors">Pricing</Link>
            </div>
            
            <div className="footer-col flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Company</h4>
              <Link to="/use-cases" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors">Use Cases</Link>
              <Link to="/about" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors">About</Link>
              <Link to="/contact" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors">Contact</Link>
              <Link to="#" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors">Blog</Link>
            </div>

            <div className="footer-col flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Legal</h4>
              <Link to="#" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors">Terms of Service</Link>
              <Link to="#" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-sm text-slate-400 dark:text-slate-500">
          <p>&copy; 2026 iEyal Solutions. All rights reserved.</p>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary opacity-5 blur-[150px] rounded-full pointer-events-none -z-10" />
    </footer>
  );
};
