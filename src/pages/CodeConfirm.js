import React from "react";
import { Link } from "react-router-dom";
import "../Style/phoneConfirm.css";

export default function CodeConfirm() {
  return (
    <div className="phoneConfirmContainer">
        <Link to='/' className="backBtn">
            <img src="/images/arrow.png" alt="" />
        </Link>
      <div className="text-center">
        <h1 style={{ width: "100%", maxWidth: "200px", margin: "0 auto 1em" }}>
          Enter your code we just texted
        </h1>
        <input type="text" style={{width: '100%', border: 'none', textAlign: 'center', outline: 'none'}} />
        <p className="mt-2">
          Didn't receive it? <span>Tap to resend.</span>
        </p>
      </div>
      <Link to={'/allow-notification'} className="primaryBtn d-flex align-items-center">
          Next <img src="/images/nextArrowIcon.svg" alt="" className="ml-1" />
      </Link>
    </div>
  );
}
