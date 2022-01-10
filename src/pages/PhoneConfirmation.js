import React, { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import 'react-phone-number-input/style.css'
import { Link } from "react-router-dom";
import "../Style/phoneConfirm.css";

export default function PhoneConfirmation() {
  const [value, setValue] = useState();

  return (
    <div className="phoneConfirmContainer">
        <Link to='/' className="backBtn">
            <img src="/images/arrow.png" alt="" />
        </Link>
      <h1>Enter your phone</h1>
      <PhoneInput value={value} onChange={setValue} />
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Service and Privacy Policy.</span> Thanks!{" "}
      </p>
      <Link to={'/code_confirm'} className="primaryBtn d-flex align-items-center">
          Next <img src="/images/nextArrowIcon.svg" alt="" style={{marginLeft: '0.35em'}} />
      </Link>
    </div>
  );
}
