import React from "react";
import { Link } from "react-router-dom";
import "../Style/phoneConfirm.css";

export default function AllowNotification() {
  return (
    <div className="phoneConfirmContainer">
      <div className="text-center">
        <h1 className="mb-4">Last, important step!</h1>
        <h1 className="mb-3">
          Enable notification to know when people are talking
        </h1>
        <div className="notificationContainer">
          <div className="p-3">
            <h3>"Clubhouse" Would Like To Send You Notifications</h3>
            <p>Notification may include alerts, sounds, and icon</p>
          </div>
          <div className="action_btn">
            <Link to={"/home"}>Don't Allow</Link>
            <Link to={"/home"}>Allow</Link>
            <img src="/images/handIcon.svg" alt="" className="hand_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
