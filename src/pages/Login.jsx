import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
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
            <h1>Welcome back to OwnRewards</h1>
            
            <div className="auth-features">
              <div className="auth-feature-pill">
                <CheckCircle2 size={16} /> Data synced
              </div>
              <div className="auth-feature-pill">
                <CheckCircle2 size={16} /> Secure login
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
              <h2>Sign in to your account</h2>
              <p>Enter your credentials to access your dashboard</p>
            </div>

            <form className="auth-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label><Mail size={16} /> Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  required
                />
              </div>
              
              <div className="form-group">
                <label><Lock size={16} /> Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required
                />
                <div className="forgot-password">
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>
              </div>
              
              <Button type="submit" variant="primary" className="auth-submit-btn" rightIcon={<LogIn size={18} />}>
                Sign In
              </Button>
            </form>
            
            <div className="auth-footer">
              <p>
                Don't have an account? <Link to="/register" className="auth-link">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
