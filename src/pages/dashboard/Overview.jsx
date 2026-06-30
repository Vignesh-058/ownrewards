import React from 'react';
import { Coins, Award, Target, Wallet } from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';
import StatCard from '../../components/dashboard/StatCard';
import { useDemo } from '../../context/DemoContext';
import './Overview.css';

const Overview = () => {
  const { profile, stats, transactions } = useDemo();

  const pointsData = [
    { name: 'Jan', points: 4000 },
    { name: 'Feb', points: 3000 },
    { name: 'Mar', points: 2000 },
    { name: 'Apr', points: 2780 },
    { name: 'May', points: 1890 },
    { name: 'Jun', points: 2390 },
    { name: 'Jul', points: 3490 },
  ];

  const redemptionData = [
    { name: 'Week 1', redemptions: 4 },
    { name: 'Week 2', redemptions: 3 },
    { name: 'Week 3', redemptions: 2 },
    { name: 'Week 4', redemptions: 7 },
  ];

  return (
    <div className="overview-page">
      <div className="page-header">
        <div>
          <h2 className="section-title">Dashboard Overview</h2>
          <p className="section-subtitle">Welcome back, {profile?.name || 'User'}!</p>
        </div>
      </div>
      <div className="stats-grid">
        <StatCard 
          title="Available Points" 
          value={stats.availablePoints.toLocaleString()} 
          icon={Coins} 
          trend="up" 
          trendValue="12%"
        />
        <StatCard 
          title="Lifetime Earned" 
          value={stats.lifetimePoints.toLocaleString()} 
          icon={Target} 
          trend="up" 
          trendValue="8%"
        />
        <StatCard 
          title="Rewards Redeemed" 
          value={stats.rewardsRedeemed} 
          icon={Award} 
          trend="up" 
          trendValue="3"
        />
        <StatCard 
          title="Wallet Balance" 
          value={`₹${stats.walletBalance.toLocaleString()}`} 
          icon={Wallet} 
          trend="down" 
          trendValue="₹500"
        />
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Monthly Points Earned</h3>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={pointsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', borderRadius: '8px', color: 'var(--text)' }}
                  itemStyle={{ color: 'var(--primary)' }}
                />
                <Area type="monotone" dataKey="points" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorPoints)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Reward Redemption Trend</h3>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={redemptionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', borderRadius: '8px', color: 'var(--text)' }}
                  cursor={{fill: 'var(--surface-hover)'}}
                />
                <Bar dataKey="redemptions" fill="var(--primary-light)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="recent-transactions-section">
        <div className="section-header-compact">
          <h3>Recent Transactions</h3>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="table-container">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Merchant</th>
                <th>Purchase</th>
                <th>Points</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.slice(0, 5).map((tx) => (
                <tr key={tx.id}>
                  <td>{new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                  <td className="merchant-cell">{tx.merchant}</td>
                  <td>{tx.purchase}</td>
                  <td>
                    {tx.earned > 0 ? (
                      <span className="points-earned">+{tx.earned}</span>
                    ) : (
                      <span className="points-redeemed">-{tx.redeemed}</span>
                    )}
                  </td>
                  <td>
                    <span className={`status-badge ${tx.status.toLowerCase()}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
