import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';
import Button from '../../components/Button';
import './Profile.css';

const Profile = () => {
  const { profile } = useDemo();

  return (
    <div className="profile-page">
      <div className="profile-header-card">
        <div className="profile-cover"></div>
        <div className="profile-info-section">
          <img src={profile.avatar} alt={profile.name} className="profile-avatar-large" />
          <div className="profile-main-details">
            <h2 className="profile-name">{profile.name}</h2>
            <div className="profile-badges">
              <span className={`membership-badge ${profile.membership.toLowerCase()}`}>
                <Award size={14} /> {profile.membership} Member
              </span>
              <span className="status-badge active">{profile.status}</span>
            </div>
          </div>
          <div className="profile-actions">
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>
      </div>

      <div className="profile-grid">
        <div className="profile-card">
          <h3 className="card-title">Personal Information</h3>
          <div className="info-list">
            <div className="info-item">
              <div className="info-icon"><Mail size={18} /></div>
              <div className="info-content">
                <label>Email Address</label>
                <span>{profile.email}</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Phone size={18} /></div>
              <div className="info-content">
                <label>Phone Number</label>
                <span>{profile.phone}</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><MapPin size={18} /></div>
              <div className="info-content">
                <label>Address</label>
                <span>123 Demo Street, Bangalore, KA 560001</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Calendar size={18} /></div>
              <div className="info-content">
                <label>Member Since</label>
                <span>{profile.joined}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <h3 className="card-title">Activity Timeline</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot success"></div>
              <div className="timeline-content">
                <h4>Redeemed Free Coffee</h4>
                <span>June 20, 2026</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot primary"></div>
              <div className="timeline-content">
                <h4>Reached Gold Tier</h4>
                <span>May 15, 2026</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot default"></div>
              <div className="timeline-content">
                <h4>First Purchase Made</h4>
                <span>January 10, 2026</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot default"></div>
              <div className="timeline-content">
                <h4>Account Created</h4>
                <span>January 1, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
