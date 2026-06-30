import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { CheckCircle2, Gift, Star, Info, Bell, Check, Trash2 } from 'lucide-react';
import Button from '../../components/Button';
import './Notifications.css';

const Notifications = () => {
  const { notifications } = useDemo();

  const getIcon = (type) => {
    switch(type) {
      case 'success': return <CheckCircle2 size={20} className="text-success" />;
      case 'info': return <Gift size={20} className="text-primary" />;
      case 'star': return <Star size={20} className="text-warning" />;
      default: return <Info size={20} className="text-secondary" />;
    }
  };

  return (
    <div className="notifications-page">
      <div className="page-header">
        <div>
          <h2 className="section-title">Notifications</h2>
          <p className="section-subtitle">Stay updated with your latest rewards and activity.</p>
        </div>
        <div className="header-actions">
          <Button variant="outline" className="action-btn">
            <Check size={16} /> Mark all as read
          </Button>
          <Button variant="outline" className="action-btn danger">
            <Trash2 size={16} /> Clear all
          </Button>
        </div>
      </div>

      <div className="notifications-list">
        {notifications.length > 0 ? notifications.map((notif) => (
          <div key={notif.id} className={`notification-card ${!notif.read ? 'unread' : ''}`}>
            <div className="notif-icon-wrapper">
              {getIcon(notif.type)}
            </div>
            <div className="notif-content">
              <div className="notif-header">
                <h4 className="notif-title">{notif.title}</h4>
                <span className="notif-time">{notif.time}</span>
              </div>
              <p className="notif-message">{notif.message}</p>
            </div>
            {!notif.read && <div className="unread-dot"></div>}
          </div>
        )) : (
          <div className="empty-state">
            <Bell size={48} className="empty-icon" />
            <h3>No notifications yet</h3>
            <p>When you earn points or unlock rewards, they will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
