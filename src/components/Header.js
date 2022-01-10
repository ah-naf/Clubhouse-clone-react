import React from "react";
import { Link } from "react-router-dom";
import "../Style/header.css";

export default function Header() {
  return (
    <div className="Header">
      <Link to={"/explore"}>
        <img src="/images/search.png" alt="" />
      </Link>
      <div className="nav_items">
        <Link to={"/friends_invite"}>
          <img src="/images/invite.png" alt="" />
        </Link>
        <Link to={"/upcoming"}>
          <img src="/images/calendar.png" alt="" />
        </Link>
        <Link to={"/activity"}>
          <img src="/images/noti.png" alt="" />
        </Link>
        <Link to={"/profile"}>
          <img src="/images/b1.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
