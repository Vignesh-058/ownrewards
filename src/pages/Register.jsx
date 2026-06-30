import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="auth-page animate-fade-in">
      <div className="auth-split">
        <div className="auth-left">
          <div className="auth-background-blobs">
            <div className="auth-blob-1"></div>
            <div className="auth-blob-2"></div>
          </div>
          
          <Link to="/" className="auth-logo">
            <Logo size={32} />
          </Link>
          
          <div className="auth-left-content">
            <h1>Start your loyalty journey</h1>
            
            <div className="auth-features">
              <div className="auth-feature-pill">
                <CheckCircle2 size={16} /> 14-day free trial
              </div>
              <div className="auth-feature-pill">
                <CheckCircle2 size={16} /> No credit card required
              </div>
            </div>
          </div>
        </div>
        
        <div className="auth-right">
          <div className="auth-card">
            <div className="auth-card-header">
              <div className="auth-card-logo">
                <Logo size={40} />
              </div>
              <h2>Create an account</h2>
              <p>Set up your profile to start building your rewards program.</p>
            </div>

            <form className="auth-form" onSubmit={handleRegister}>
              <div className="form-group" style={{ flexDirection: 'row', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label><User size={16} /> First Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane" 
                    required
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label><Mail size={16} /> Work Email</label>
                <input 
                  type="email" 
                  placeholder="jane@company.com" 
                  required
                />
              </div>
              
              <div className="form-group">
                <label><Lock size={16} /> Password</label>
                <input 
                  type="password" 
                  placeholder="Create a strong password" 
                  required
                />
                <small style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem', marginTop: '4px' }}>
                  Must be at least 8 characters long.
                </small>
              </div>
              
              <Button type="submit" variant="primary" className="auth-submit-btn" rightIcon={<ArrowRight size={18} />}>
                Create Account
              </Button>
            </form>
            
            <div className="auth-footer">
              <p>
                Already have an account? <Link to="/login" className="auth-link">Log in</Link>
              </p>
              <p className="auth-terms">
                By clicking "Create Account", you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
