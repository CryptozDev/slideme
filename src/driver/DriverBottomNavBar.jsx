import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DriverBottomNavBar.css';

const DriverBottomNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="driver-bottom-navbar">
      <button className="nav-button" onClick={() => navigate('/receive-job')}>
        <img src="/icons/receive-job.png" alt="รับงาน" />
        <span>รับงาน</span>
      </button>
      <button className="nav-button" onClick={() => navigate('/current-job')}>
        <img src="/icons/current-job.png" alt="งานปัจจุบัน" />
        <span>งานปัจจุบัน</span>
      </button>
      <button className="nav-button" onClick={() => navigate('/history')}>
        <img src="/icons/history.png" alt="History" />
        <span>ประวัติ</span>
      </button>
      <button className="nav-button" onClick={() => navigate('/profile')}>
        <img src="/icons/profile.png" alt="Profile" />
        <span>โปรไฟล์</span>
      </button>
    </div>
  );
};

export default DriverBottomNavBar;