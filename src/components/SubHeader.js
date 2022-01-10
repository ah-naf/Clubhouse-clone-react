import React from "react";
import "../Style/explore.css";
import { Link } from "react-router-dom";

export default function SubHeader(props) {
  return (
    <div className="head">
      <Link to="/home">
        <img src="/images/arrow.png" alt="" />
      </Link>
      <h3>{props.pageTitle}</h3>
    </div>
  );
}
