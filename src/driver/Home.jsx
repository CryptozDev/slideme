import React from 'react';
import Navbar from './Navbar';
import MapView from './MapView';
import DriverBottomNavBar from './DriverBottomNavBar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <MapView />
      <div className="action-buttons">
        <button className="action-btn call">
          <img src="/icons/phone-icon.png" alt="Call" />
          โทร
        </button>
        <button className="action-btn chat">
          <img src="/icons/chat-icon.png" alt="Chat" />
          แชท
        </button>
        <button className="action-btn details">
          <img src="/icons/details-icon.png" alt="Details" />
          รายละเอียดงาน
        </button>
      </div>
      <DriverBottomNavBar />
    </div>
  );
};

export default Home;