import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Eye, EyeOff } from 'lucide-react';


const Input = React.forwardRef(({
  label,
  type = 'text',
  error,
  helperText,
  className,
  leftIcon,
  rightIcon,
  required,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="input-group">
      {label && (
        <label className="input-label">
          {label} {required && <span className="input-required">*</span>}
        </label>
      )}
      
      <div className="input-wrapper">
        {leftIcon && <span className="input-icon-left">{leftIcon}</span>}
        
        <input
          ref={ref}
          type={inputType}
          className={clsx(
            'input-field',
            leftIcon && 'has-left-icon',
            (rightIcon || isPassword) && 'has-right-icon',
            error && 'input-error',
            className
          )}
          required={required}
          {...props}
        />
        
        {isPassword ? (
          <button
            type="button"
            className="input-password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        ) : rightIcon ? (
          <span className="input-icon-right">{rightIcon}</span>
        ) : null}
      </div>

      {(error || helperText) && (
        <p className={clsx('input-helper-text', error && 'error-text')}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
