// src/components/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { phone, password });
    navigate('/drivertobiding');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="https://img2.pic.in.th/pic/slideme-logo.png" alt="Slide Me Logo" className="login-logo" />
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              placeholder="เบอร์โทรศัพท์มือถือ"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="custom-input"
            />
          </div>
          <div className="form-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="รหัสผ่าน"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="custom-input"
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              <img
                src={showPassword ? "https://img5.pic.in.th/file/secure-sv1/showpass.png" : "https://img2.pic.in.th/pic/hidepass.png"}
                alt={showPassword ? "Hide Password" : "Show Password"}
                className="password-icon"
              />
            </span>
          </div>
          <div className="forgot-password-container">
            <Link to="/forgotpass-driver" className="forgot-password-link">ลืมรหัสผ่าน</Link>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="login-register">
          หากคุณยังไม่มีบัญชี <Link to="/register-driver" className="register-link">สมัครเลย</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;