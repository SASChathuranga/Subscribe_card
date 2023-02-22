import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="container">
      <div className="content">
        <div className="header-content">
          <div className="header">Don’t miss any updates</div>
          <div className="sub-title">
            Subscribe to stay in the loop on our latest news, updates, and
            exclusive offers
          </div>
          <div className="bottom-line"></div>
        </div>
        <div className="input-box">
          <input type="email" placeholder="Enter your email" />
          <div className="btn-icon">
            <div className="bg-icon"></div>
            <i class="fa fa-paper-plane " aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
