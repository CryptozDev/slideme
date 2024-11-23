import React from 'react';
import './PriceSuccessPopup.css';
import { Link } from 'react-router-dom';

const PriceSuccessPopup = () => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3 className="popup-title">คนขับเสนอราคาให้คุณ</h3>
        <div className="icon-container">
          <img src="https://img2.pic.in.th/pic/Payicon.png" alt="Pay Icon" className="pay-icon" />
        </div>
        <div className="price-info">
          <p className="price">1,500 บาท</p>
        </div>
        <div className="button-container">
          <Link to="/home" className="cancel-button">ยกเลิก</Link>
          <Link to="/payment" className="pay-button">ชำระเงิน</Link>
        </div>
      </div>
    </div>
  );
};

export default PriceSuccessPopup;