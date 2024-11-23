// src/components/ConfirmDestination.jsx
import React from 'react';
import './ConfirmDestination.css';
import Navbar from './Navbar';
import BottomNavBar from './BottomNavBar';
import MapView from './MapView';
import { useNavigate } from 'react-router-dom';

const ConfirmDestination = () => {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate('/choosetowtruck');
  };

  return (
    <div className="confirm-destination-container">
      <Navbar />
      <div className="mapview-container">
        <MapView />
        <div className="gray-overlay">
          <div className="confirm-box">
            <div className="confirm-destination-header">
              <div className="drag-bar" />
            </div>
            <div className="location-info">
              <div className="location-item">
                <span className="icon green-circle">🟢</span>
                <div className="text">
                  <div className="label">ตำแหน่งจุดรับ</div>
                  <div className="name">ตำแหน่งปัจจุบัน</div>
                </div>
              </div>
              <div className="location-separator" />
              <div className="location-item">
                <span className="icon black-circle">📍</span>
                <div className="text">
                  <div className="label">ตำแหน่งจุดส่ง</div>
                  <div className="name">อู่ศรีปทุม</div>
                </div>
              </div>
            </div>
            <button className="confirm-button" onClick={handleConfirmClick}>
              ถัดไป
            </button>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default ConfirmDestination;