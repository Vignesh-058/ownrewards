import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import Button from '../../components/Button';
import Modal from '../../components/dashboard/Modal';
import { Gift, Lock } from 'lucide-react';
import './Rewards.css';

const Rewards = () => {
  const { rewards, stats } = useDemo();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);

  const handleRedeem = (reward) => {
    setSelectedReward(reward);
    setModalOpen(true);
  };

  return (
    <div className="rewards-page">
      <div className="rewards-header">
        <div>
          <h2 className="section-title">Available Rewards</h2>
          <p className="section-subtitle">Redeem your points for exclusive vouchers and experiences.</p>
        </div>
        <div className="points-balance-badge">
          <span className="balance-label">Available Balance</span>
          <span className="balance-value">{stats.availablePoints.toLocaleString()} pts</span>
        </div>
      </div>

      <div className="rewards-grid">
        {rewards.map((reward) => {
          const isAffordable = stats.availablePoints >= reward.points;
          return (
            <div key={reward.id} className={`reward-card ${!isAffordable ? 'locked' : ''}`}>
              <div className={`reward-color-strip bg-${reward.color}`}></div>
              <div className="reward-content">
                <div className="reward-category">{reward.category}</div>
                <h3 className="reward-title">{reward.title}</h3>
                <p className="reward-desc">{reward.desc}</p>
                <div className="reward-footer">
                  <div className="reward-cost">
                    <Gift size={16} />
                    <span>{reward.points.toLocaleString()} pts</span>
                  </div>
                  <Button 
                    variant={isAffordable ? "primary" : "outline"} 
                    onClick={() => handleRedeem(reward)}
                    disabled={!isAffordable}
                    className="redeem-btn"
                  >
                    {!isAffordable ? <><Lock size={14} className="lock-icon" /> Locked</> : 'Redeem'}
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        title="Demo Restriction"
      >
        <p>
          You tried to redeem the <strong>{selectedReward?.title}</strong> for {selectedReward?.points.toLocaleString()} points.
        </p>
        <p style={{ marginTop: '12px' }}>
          <strong>Note:</strong> Reward redemption is disabled in this portfolio demo version. In the real application, this would deduct the points and send the voucher to your registered email address.
        </p>
      </Modal>
    </div>
  );
};

export default Rewards;
