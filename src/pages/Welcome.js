import React from "react";
import "../Style/Welcome.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className={"WelcomeContainer"}>
      <h1>Welcome</h1>
      <div className={"WelcomeInfo"}>
        <p>
          We're working hard to get Clubhouse ready for everyone! While we wrap
          up the finishing touches, we're adding people gradually to make sure
          nothing break
        </p>
        <p>
          Anyone can join with an invite from an existing user - or reserve your
          username and we'll text you if you have a friend on the app who can
          let you in. We are so grateful you're here and can't wait to have you
          join!
        </p>
        <p>Ahnaf, Shifat & the Clubhouse team</p>
      </div>
      <div className={"actionBtn"}>
        <Link
          to={"/invite"}
          className="primaryBtn d-flex align-items-center"
        >
          Get your username
          {/* <img src={} alt="" /> */}
        </Link>
        <Link to={'/'}>Have an invite text? Sign in</Link>
      </div>
    </div>
  );
}
