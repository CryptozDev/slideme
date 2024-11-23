// src/components/Driveriscoming.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import BottomNavBar from './BottomNavBar';
import MapView from './MapView';
import './Driveriscoming.css';

const Driveriscoming = () => {
  const navigate = useNavigate();

  const handlecancel = (e) => {
    e.preventDefault();
    navigate('/home');
    }

  return (
    <div className="driver-is-coming-container">
      <Navbar />
      <MapView />

      <div>
      <div className="info-card">
        <div className="driver-info">
            <img
              src="https://img2.pic.in.th/pic/imagebb33cd674b98dae6.png"
              alt="Driver"
              className="driver-image"
            />
            <div className="driver-details">
              <h4>สมชาย</h4>
              <span className="rating">⭐ 4.9</span>
            </div>
            <div className="contact-icons">
              <img src="https://img2.pic.in.th/pic/chat96a103a3a0de24a4.png" alt="Chat" className="icon contact-icon" />
              <img src="https://img5.pic.in.th/file/secure-sv1/call2a608874f06be4da.png" alt="Call" className="icon contact-icon" />
            </div>
          </div>

          <div className="location-info">
            <div className="location-item">
              <span className="green-dot">🟢</span>
              <span className="location-text">ใกล้ฟิวเจอร์ปาร์ครังสิต</span>
            </div>
            <div className="location-item">
              <span className="pink-dot">📍</span>
              <span className="location-text">อู่ศรีปทุม</span>
            </div>
          </div>

          <hr className="divider" />

          <div className="ride-details">
            <img
              src="https://img5.pic.in.th/file/secure-sv1/car5f4e2811be6f93e0.png"
              alt="รถสไลด์"
              className="ride-icon"
            />
            <span>รถสไลด์</span>
            <span className="ride-time">12 นาที</span>
            <span className="ride-price">1,500 บาท</span>
          </div>
        <button className="cancelbtn" onClick={handlecancel}>ยกเลิก</button>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Driveriscoming;