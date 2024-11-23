// src/components/Destination.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import BottomNavBar from './BottomNavBar';
import './DestinationSelect.css';

const Destination = () => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate('/confirmdestination');
  };

  return (
    <div className="destination-container">
      <Navbar />
      <div className="destination-content">
        <div className="search-container">
          <div className="search-item current-location">
            <span className="icon">🟢</span>
            <span className="text">ตำแหน่งปัจจุบัน</span>
          </div>
          <div className="search-item destination-search">
            <span className="icon">🔍</span>
            <span className="text">จุดหมายปลายทาง</span>
          </div>
        </div>
        <div className="destination-list">
          <div className="list-item" onClick={handleItemClick}>
            <span className="list-icon">🕒</span>
            <div className="list-text">
              <div className="location-name">อู่ศรีปทุม</div>
              <div className="location-address">241/02 ถนนพหลโยธิน เขตจตุจักร กรุงเทพ 10900</div>
            </div>
          </div>
          <div className="list-item" onClick={handleItemClick}>
            <span className="list-icon">🕒</span>
            <div className="list-text">
              <div className="location-name">อู่นายแดนทางลาดยาง</div>
              <div className="location-address">1234 ถนนดอนเมือง-โทลล์เวย์ เขตดอนเมือง กรุงเทพ 11111</div>
            </div>
          </div>
          <div className="list-item" onClick={handleItemClick}>
            <span className="list-icon">🕒</span>
            <div className="list-text">
              <div className="location-name">อู่ลุงซันเรดซิ่ง</div>
              <div className="location-address">2456 ถนนดอนเมือง เขตบางเขน กรุงเทพ 777</div>
            </div>
          </div>
          <div className="list-item" onClick={handleItemClick}>
            <span className="list-icon">🕒</span>
            <div className="list-text">
              <div className="location-name">อู่เตอร์รังสิตเซอร์วิส</div>
              <div className="location-address">958 ถนนพหลโยธิน อำเภอคลองหลวง ปทุมธานี 987</div>
            </div>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Destination;