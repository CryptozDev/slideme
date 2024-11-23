import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import MapView from './MapView';
import DriverBottomNavBar from './DriverBottomNavBar';
import './Drivertobiding.css';

const Driveriscoming = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const handlecomfirm = (e) => {
    navigate('/biding-driver');
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="driver-is-coming-container">
      <Navbar />
      <MapView />
      <div className={`slide-up-container ${isExpanded ? 'expanded' : ''}`}>
        <div className="slide-header" onClick={toggleExpand}>
          <div className="slide-handle"></div>
        </div>

        <div className="driver-info">
          <img
            src="https://via.placeholder.com/50"
            alt="Driver"
            className="driver-image"
          />
          <div className="driver-details">
            <h4 className="driver-name">น้องแดน</h4>
            <p className="driver-phone">096-XXX-XXXX</p>
          </div>
          <div className="contact-icons">
            <img
              src="https://img.icons8.com/ios-filled/50/2ea366/phone.png"
              alt="Call"
              className="contact-icon"
            />
          </div>
        </div>

        <hr className="divider" />

        <div className="location-info">
          <div className="location-item">
            <span className="green-dot">●</span>
            <span>ใกล้ฟิวเจอร์ปาร์ครังสิต</span>
          </div>
          <div className="location-item">
            <span className="pink-dot">●</span>
            <span>อู่ศรีปทุม</span>
          </div>
        </div>

        <div className="ride-details">
          <img
            src="https://img5.pic.in.th/file/secure-sv1/car5f4e2811be6f93e0.png"
            alt="Car"
            className="ride-icon"
          />
          <div className="ride-info">
            <p className="distance">ระยะทาง: 17 กม.</p>
            <p className="time">เวลา: 17 นาที</p>
          </div>
        </div>


        <button className="confirm-button" onClick={handlecomfirm}>เสนอราคา</button>
      </div>
      <DriverBottomNavBar />
    </div>
  );
};

export default Driveriscoming;