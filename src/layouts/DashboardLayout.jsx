import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Gift, 
  ArrowRightLeft, 
  Users, 
  Bell, 
  User, 
  Settings, 
  HelpCircle,
  Menu,
  X,
  Search,
  LogOut
} from 'lucide-react';
import { useDemo } from '../context/DemoContext';
import Logo from '../components/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { profile, notifications } = useDemo();

  const unreadCount = notifications.filter(n => !n.read).length;

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Rewards', path: '/dashboard/rewards', icon: Gift },
    { name: 'Transactions', path: '/dashboard/transactions', icon: ArrowRightLeft },
    { name: 'Referrals', path: '/dashboard/referrals', icon: Users },
    { name: 'Profile', path: '/dashboard/profile', icon: User },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
    { name: 'Help', path: '/dashboard/help', icon: HelpCircle },
  ];

  // getPageTitle was removed

  return (
    <div className="dashboard-container">
      <div className="dashboard-layout">
        {/* Mobile Sidebar Overlay */}
        <div 
          className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar */}
        <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <Logo size={28} />
            </div>
            <button className="mobile-close" onClick={() => setSidebarOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path}
                end={item.path === '/dashboard'}
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon size={20} className="nav-icon" />
                <span className="nav-label">{item.name}</span>
                {item.badge > 0 && <span className="nav-badge">{item.badge}</span>}
              </NavLink>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="user-profile-mini">
              <img src={profile.avatar} alt="User Avatar" className="avatar-mini" />
              <div className="user-info-mini">
                <span className="user-name-mini">{profile.name}</span>
                <span className="user-tier-mini">{profile.membership} Member</span>
              </div>
            </div>
            <NavLink to="/" className="logout-link">
              <LogOut size={18} />
              <span>Exit Demo</span>
            </NavLink>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="dashboard-main-area">
          {/* Top Header */}
          <header className="dashboard-header">
            <div className="header-left">
              <button className="mobile-toggle" onClick={() => setSidebarOpen(true)}>
                <Menu size={24} />
              </button>
            </div>

            <div className="header-right">
              <div className="search-bar">
                <Search size={18} className="search-icon" />
                <input type="text" placeholder="Search..." />
              </div>
              <NavLink to="/dashboard/notifications" className="header-bell">
                <Bell size={20} />
                {unreadCount > 0 && <span className="bell-badge"></span>}
              </NavLink>
              <img src={profile.avatar} alt="Profile" className="header-avatar" />
            </div>
          </header>

          {/* Page Content */}
          <main className="dashboard-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
