// src/components/DetailForm.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DetailForm.css';

const DetailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    agreeTerms: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // คุณสามารถเพิ่ม logic การส่งข้อมูลที่นี่
    console.log(formData);
    navigate('/otp'); // นำทางไปยังหน้า /otp
  };

  return (
    <div className="form-container">
      <h2>สมัครสมาชิก</h2>
      <p>มีบัญชีอยู่แล้ว? <Link to="/login">เข้าสู่ระบบ</Link></p>
      <form onSubmit={handleSubmit} className="detail-form">
        <label>
          ชื่อ *
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="custom-input"
          />
        </label>
        <label>
          นามสกุล *
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            className="custom-input"
          />
        </label>
        <label>
          อีเมล *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="custom-input"
          />
        </label>
        <label className="checkbox-label">
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            ยอมรับ <a href="/terms">เงื่อนไขการใช้งาน</a> และ <a href="/policy">นโยบายความเป็นส่วนตัว</a>
          </div>
        </label>
        <button type="submit" className="submit-button">สมัครสมาชิก</button>
      </form>
    </div>
  );
};

export default DetailForm;