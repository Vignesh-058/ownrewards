import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { Search, Filter, Download } from 'lucide-react';
import Button from '../../components/Button';
import './Transactions.css';

const Transactions = () => {
  const { transactions } = useDemo();

  return (
    <div className="transactions-page">
      <div className="page-header">
        <div>
          <h2 className="section-title">Transactions</h2>
          <p className="section-subtitle">View your recent points activity and redemptions.</p>
        </div>
        <div className="header-actions">
          <Button variant="outline" className="action-btn">
            <Download size={16} /> Export
          </Button>
        </div>
      </div>

      <div className="transactions-container">
        <div className="transactions-toolbar">
          <div className="search-input">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search transactions..." />
          </div>
          <div className="filter-group">
            <Button variant="outline" className="filter-btn">
              <Filter size={16} /> Filters
            </Button>
            <select className="sort-select">
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Highest Points</option>
              <option>Lowest Points</option>
            </select>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="full-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Merchant / Details</th>
                <th>Amount Spent</th>
                <th>Points Earned</th>
                <th>Points Redeemed</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td className="tx-id">#TX-{1000 + tx.id}</td>
                  <td>{new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                  <td className="merchant-name">{tx.merchant}</td>
                  <td>{tx.purchase}</td>
                  <td>
                    {tx.earned > 0 ? (
                      <span className="tx-earned">+{tx.earned}</span>
                    ) : (
                      <span className="tx-empty">-</span>
                    )}
                  </td>
                  <td>
                    {tx.redeemed > 0 ? (
                      <span className="tx-redeemed">-{tx.redeemed}</span>
                    ) : (
                      <span className="tx-empty">-</span>
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
        
        <div className="pagination">
          <span className="page-info">Showing 1 to 10 of 24 entries</span>
          <div className="page-controls">
            <button className="page-btn" disabled>Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
