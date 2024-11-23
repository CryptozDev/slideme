// src/components/Createpass.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Createpass.css';

const Createpass = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [matchValid, setMatchValid] = useState(true);
  const [isConfirmTouched, setIsConfirmTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPasswordStrength(value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setIsConfirmTouched(true);
    setMatchValid(value === password);
  };

  const checkPasswordStrength = (password) => {
    const lengthValid = password.length >= 8 && password.length <= 20;
    const uppercaseValid = /[A-Z]/.test(password);
    const lowercaseValid = /[a-z]/.test(password);
    const numberValid = /[0-9]/.test(password);

    if (lengthValid && uppercaseValid && lowercaseValid && numberValid) {
      setPasswordStrength('รหัสผ่านแข็งแรง');
      setPasswordValid(true);
    } else {
      setPasswordStrength('รหัสผ่านต้องเป็นภาษาอังกฤษ, มีตัวอักษรใหญ่, ตัวอักษรเล็ก, ตัวเลข และมีความยาว 8-20 ตัวอักษร');
      setPasswordValid(false);
    }
    setMatchValid(confirmPassword === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && passwordValid) {
      console.log('Password successfully created:', password);
      navigate('/login-driver'); // นำทางไปหน้า /login
    } else {
      alert('รหัสผ่านไม่ตรงกันหรือไม่ตรงตามเงื่อนไข');
    }
  };

  return (
    <div className="createpass-container">
      <div className="createpass-box">
        <h2>สร้างรหัสผ่าน</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className={password ? 'float-label active' : 'float-label'}>รหัสผ่าน</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                maxLength="20"
                placeholder="รหัสผ่าน"
                className="custom-input"
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <img
                  src={showPassword ? "https://img2.pic.in.th/pic/hidepass.png" : "https://img5.pic.in.th/file/secure-sv1/showpass.png"}
                  alt={showPassword ? "Hide Password" : "Show Password"}
                  className="password-icon"
                />
              </span>
            </div>
            <p className={`password-hint ${passwordValid ? 'valid' : 'invalid'}`}>
              {passwordStrength}
            </p>
            <p className="password-count">{password.length}/20</p>
          </div>
          <div className="form-group">
            <label className={confirmPassword ? 'float-label active' : 'float-label'}>ยืนยันรหัสผ่าน</label>
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                maxLength="20"
                placeholder="ยืนยันรหัสผ่าน"
                className="custom-input"
                onFocus={() => setIsConfirmTouched(true)}
              />
              <span
                className="toggle-password"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                <img
                  src={showConfirmPassword ? "https://img2.pic.in.th/pic/hidepass.png" : "https://img5.pic.in.th/file/secure-sv1/showpass.png"}
                  alt={showConfirmPassword ? "Hide Password" : "Show Password"}
                  className="password-icon"
                />
              </span>
            </div>
            {!matchValid && isConfirmTouched && (
              <p className="password-match-error">รหัสผ่านไม่ตรงกัน</p>
            )}
            <p className="password-count">{confirmPassword.length}/20</p>
          </div>
          <button type="submit" className="createpass-button" disabled={!passwordValid || !matchValid}>ยืนยัน</button>
        </form>
      </div>
    </div>
  );
};

export default Createpass;