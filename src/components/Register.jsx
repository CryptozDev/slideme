// src/components/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering with phone:', phone);

    // Navigate to /detailform after clicking the button
    navigate('/detailform');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">สมัครสมาชิก</h1>
        <p className="register-subtitle">ระบุเบอร์โทรศัพท์เพื่อใช้ในการสมัคร</p>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <input
              type="number"
              placeholder="เบอร์โทรศัพท์มือถือ"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="custom-input"
            />
          </div>
          <button type="submit" className="register-button">ยืนยัน</button>
        </form>
      </div>
    </div>
  );
}

export default Register;