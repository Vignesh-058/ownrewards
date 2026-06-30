import React, { useState, useEffect } from 'react';
import { Moon, Sun, Bell, Globe, Shield, CreditCard } from 'lucide-react';
import Button from '../../components/Button';
import './Settings.css';

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [activeTab, setActiveTab] = useState('appearance');
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // toggleTheme removed

  return (
    <div className="settings-page">
      <div className="page-header">
        <div>
          <h2 className="section-title">Settings</h2>
          <p className="section-subtitle">Manage your account preferences and app settings.</p>
        </div>
      </div>

      <div className="settings-layout">
        <div className="settings-sidebar">
          <button className={`settings-tab ${activeTab === 'appearance' ? 'active' : ''}`} onClick={() => setActiveTab('appearance')}><Sun size={18}/> Appearance</button>
          <button className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`} onClick={() => setActiveTab('notifications')}><Bell size={18}/> Notifications</button>
          <button className={`settings-tab ${activeTab === 'language' ? 'active' : ''}`} onClick={() => setActiveTab('language')}><Globe size={18}/> Language & Region</button>
          <button className={`settings-tab ${activeTab === 'privacy' ? 'active' : ''}`} onClick={() => setActiveTab('privacy')}><Shield size={18}/> Privacy & Security</button>
          <button className={`settings-tab ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => setActiveTab('billing')}><CreditCard size={18}/> Billing</button>
        </div>

        <div className="settings-content">
          {activeTab === 'appearance' && (
            <div className="settings-section">
              <h3 className="settings-section-title">Appearance</h3>
              <p className="settings-section-desc">Customize how OwnRewards looks on your device.</p>
              
              <div className="settings-card">
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Theme Selection</h4>
                    <p>Toggle between Light and Dark mode.</p>
                  </div>
                  <div className="setting-action">
                    <div className="theme-toggle-group">
                      <button 
                        className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                        onClick={() => setTheme('light')}
                      >
                        <Sun size={16}/> Light
                      </button>
                      <button 
                        className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                        onClick={() => setTheme('dark')}
                      >
                        <Moon size={16}/> Dark
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'language' && (
            <div className="settings-section">
              <h3 className="settings-section-title">Language & Region</h3>
              <div className="settings-card">
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Language</h4>
                    <p>Select your preferred language.</p>
                  </div>
                  <div className="setting-action">
                    <select className="settings-select" defaultValue="en">
                      <option value="en">English (US)</option>
                      <option value="uk">English (UK)</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="hi">Hindi</option>
                    </select>
                  </div>
                </div>
                
                <div className="setting-divider"></div>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Currency</h4>
                    <p>Select your preferred currency for display.</p>
                  </div>
                  <div className="setting-action">
                    <select className="settings-select" defaultValue="inr">
                      <option value="usd">USD ($)</option>
                      <option value="eur">EUR (€)</option>
                      <option value="inr">INR (₹)</option>
                      <option value="gbp">GBP (£)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {['notifications', 'privacy', 'billing'].includes(activeTab) && (
            <div className="settings-section">
              <h3 className="settings-section-title" style={{textTransform: 'capitalize'}}>{activeTab} Settings</h3>
              <p className="settings-section-desc">More configuration options coming soon.</p>
            </div>
          )}

          <div className="settings-actions">
            <Button variant="primary">Save Changes</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
