import React from "react";
import "./PartnerDriverPage.css";

const PartnerDriverPage = () => {
  return (
    <div className="partner-driver-page">
      <div className="left-section">
        <div className="truck-illustration"></div>
        <h2>Welcome to MyFastX Partner</h2>
        <h3>Quick & Reliable Delivery and Logistics Solution</h3>
        <p>
          At MyFastX, we are revolutionizing the delivery and logistics industry
          by providing swift, dependable services to our clients. Our mission is
          to ensure every package reaches its destination on time, every time.
        </p>
      </div>
      <div className="right-section">
        <div className="top-content">
          <div className="diagonal-lines"></div>
          <h4>Drive Your Success with MyFastX</h4>
          <h2>Join Us as a Partner Driver</h2>
          <p>
            Are you a vehicle owner looking for new opportunities? Join MyFastX
            today and become part of a dynamic network of drivers. With us,
            you'll enjoy flexible work hours, competitive earnings, and the
            satisfaction of delivering smiles across the city.
          </p>
          <button>Register now for just Rs. 999!</button>
        </div>
        <div className="features">
          <div className="feature">
            <div className="icon income">
                <img src="" alt="" />
            </div>
            <h5>Reliable Income</h5>
            <p>Earn a steady income with consistent delivery requests.</p>
          </div>
          <div className="feature">
            <div className="icon schedule"></div>
            <h5>Flexible Schedule</h5>
            <p>Choose your working hours and balance your personal life.</p>
          </div>
          <div className="feature">
            <div className="icon support"></div>
            <h5>Support</h5>
            <p>
              Access our dedicated support team whenever you need assistance.
            </p>
          </div>
          <div className="feature">
            <div className="icon growth"></div>
            <h5>Growth opportunities</h5>
            <p>
              Advance your career with regular training and development
              programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDriverPage;
