import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import MapView from "./MapView";
import "./Bidding.css";

const Bidding = () => {
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handlecomfirm = (e) => {
    console.log('ราคาที่เสนอให้ลูกค้า:', { price });
    navigate('/waiting-driver');
  };

  const handlePriceChange = (e) => {
    // รับค่าจาก input
    const value = e.target.value.replace(/,/g, ""); // เอาเครื่องหมายลูกน้ำออกก่อน
    if (!isNaN(value)) {
      const formattedValue = Number(value).toLocaleString(); // ใส่ลูกน้ำ
      setPrice(formattedValue); // อัปเดตค่าใน state
    }
  };

  return (
    <div className="bidding-container">
      <Navbar />
      <MapView />
      <div className="bidding-popup">
        <h2 className="bidding-title">เสนอราคา</h2>
        <p className="bidding-subtext">คุณควรเสนอราคาตามความเหมาะสม</p>
        <p className="bidding-subtext">
          หรือยึดอัตราที่แนะนำได้{" "}
          <span className="suggested-rate">คลิกเลย</span>
        </p>
        <div className="bidding-input-container">
          <input
            type="text"
            className="bidding-input"
            placeholder="ราคา (บาท)"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className="location-details">
          <div className="pickup-location">
            <div className="circle"></div>
            <span className="location-text">ใกล้ฟิวเจอร์ปาร์ครังสิต</span>
          </div>
          <div className="destination-location">
            <div className="location-icon"></div>
            <span className="location-text">อู่ศรีปทุม</span>
          </div>
        </div>
        <div className="vehicle-details">
          <img
            src="https://img5.pic.in.th/file/secure-sv1/car5f4e2811be6f93e0.png"
            alt="Vehicle"
            className="vehicle-icon"
          />
          <div className="vehicle-info">
            <p className="vehicle-text">ระยะทาง: 17 กม.</p>
            <p className="vehicle-text">เวลา: 17 นาที</p>
          </div>
        </div>
        <button className="confirm-button" onClick={handlecomfirm}>ยืนยัน</button>
      </div>
    </div>
  );
};

export default Bidding;