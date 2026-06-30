import React from 'react';
import { X, AlertCircle } from 'lucide-react';
import './DashboardComponents.css';
import Button from '../Button';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrapper">
            <AlertCircle className="modal-title-icon" size={20} />
            <h3 className="modal-title">{title}</h3>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <Button variant="primary" onClick={onClose}>Understood</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
