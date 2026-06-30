import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Users, Copy, Share2, CheckCircle2 } from 'lucide-react';
import Button from '../../components/Button';
import './Referrals.css';

const Referrals = () => {
  const { stats } = useDemo();
  const [copied, setCopied] = useState(false);
  const referralCode = "OR-JOHNSON-24";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="referrals-page">
      <div className="referrals-hero">
        <div className="referrals-hero-content">
          <h2>Invite Friends & Earn Points</h2>
          <p>Get 500 points for every friend who signs up using your referral code and makes their first purchase.</p>
        </div>
        <div className="referral-code-box">
          <span className="code-label">Your Referral Code</span>
          <div className="code-display-wrapper">
            <div className="code-display">{referralCode}</div>
            <button className="copy-btn" onClick={handleCopy} title="Copy Code">
              {copied ? <CheckCircle2 size={20} className="text-success" /> : <Copy size={20} />}
            </button>
          </div>
          <Button variant="primary" className="share-btn w-full">
            <Share2 size={16} /> Share Link
          </Button>
        </div>
      </div>

      <div className="referrals-stats">
        <div className="ref-stat-card">
          <div className="ref-icon-box">
            <Users size={24} />
          </div>
          <div className="ref-stat-info">
            <span className="ref-stat-value">3</span>
            <span className="ref-stat-label">Total Referrals</span>
          </div>
        </div>
        <div className="ref-stat-card">
          <div className="ref-icon-box success">
            <CheckCircle2 size={24} />
          </div>
          <div className="ref-stat-info">
            <span className="ref-stat-value">{stats.referralBonus.toLocaleString()}</span>
            <span className="ref-stat-label">Bonus Points Earned</span>
          </div>
        </div>
      </div>

      <div className="referrals-history">
        <h3 className="section-title">Referral History</h3>
        <div className="table-wrapper">
          <table className="full-table">
            <thead>
              <tr>
                <th>Friend</th>
                <th>Date Joined</th>
                <th>Status</th>
                <th>Bonus Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="merchant-name">Mike Ross</td>
                <td>May 15, 2026</td>
                <td><span className="status-badge completed">Completed</span></td>
                <td className="tx-earned">+500</td>
              </tr>
              <tr>
                <td className="merchant-name">Rachel Zane</td>
                <td>Apr 02, 2026</td>
                <td><span className="status-badge completed">Completed</span></td>
                <td className="tx-earned">+500</td>
              </tr>
              <tr>
                <td className="merchant-name">Harvey Specter</td>
                <td>Feb 28, 2026</td>
                <td><span className="status-badge completed">Completed</span></td>
                <td className="tx-earned">+500</td>
              </tr>
              <tr>
                <td className="merchant-name">Donna Paulsen</td>
                <td>Jun 25, 2026</td>
                <td><span className="status-badge credited">Pending</span></td>
                <td className="tx-empty">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
