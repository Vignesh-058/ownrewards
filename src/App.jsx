import React from 'react';
import LandingPage from './pages/LandingPage';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

import { DemoProvider } from './context/DemoContext';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Rewards from './pages/dashboard/Rewards';
import Transactions from './pages/dashboard/Transactions';
import Referrals from './pages/dashboard/Referrals';
import Notifications from './pages/dashboard/Notifications';
import Profile from './pages/dashboard/Profile';
import Settings from './pages/dashboard/Settings';
import Help from './pages/dashboard/Help';

function App() {
  return (
    <DemoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DemoProvider>
  );
}

export default App;
