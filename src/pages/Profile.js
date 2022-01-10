import React from "react";
import "../Style/profile.css";
import "../Style/explore.css";
import { Link } from "react-router-dom";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from "react-icons/ai";

export default function Profile() {
  return (
    <>
      <div className="profileContainer">
        <div className="header">
          <div className={`head text-end mb-0`}>
            <Link to={"/home"}>
              <img
                src="/images/arrow.png"
                alt=""
                className="arrow_icon"
                style={{ transform: "rotate(0deg)", left: 0, right: 'unset' }}
              />
            </Link>
            <div
              className="actionBtn"
              style={{ flexDirection: "row", justifyContent: "end" }}
            >
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img src="/images/user-img.jpg" alt="" className="profile_image" />
        <h4>Ahnaf Hasan</h4>
        <p>@ahnaf</p>
        <div className="follow">
          <p>
            <span>0</span> Followers
          </p>
          <p>
            <span>51</span> Following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button className="mb-0">
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
        <div className="nominated">
            <img src="/images/user-img.jpg" alt="" />
            <div>
                <p>Joined 14-July-2022</p>
                <p>Nominated by <span>Fanha Hasan</span></p>
            </div>
        </div>
        <p>Member of</p>
        <button className="addMemberBtn">
            <BsPlus />
        </button>
      </div>
    </>
  );
}
