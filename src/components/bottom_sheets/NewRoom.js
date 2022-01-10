import React, { useState } from "react";
import "../../Style/roomDetail.css";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicMuteFill, BsMicFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(true);

  const card = props.cardDetail;
  return (
    <>
      <div className="roomDetailContainer">
        <div className="head">
          <div className="d-flex align-items-center">
            <Link
              to={"#"}
              onClick={() => {
                props.setSheetVisible(false);
              }}
            >
              <img src="images/arrow.png" className="arrow_icon" alt="" />
            </Link>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <img src="images/user-img.jpg" className="profile_img" alt="" style={{position: 'relative', top: '0', transform: 'translate(0)'}} />
          </div>
        </div>
        <div className="roomDetailCard">
          <div
            className="d-flex align-items-center justify-content-betwwen flex-wrap"
            style={{ padding: "0.5em 1em" }}
          >
            {card.members.map((item) => (
              <div className="memberContainer">
                {micMuteVisible ? (
                  <div className="audio_icon">
                    <BsMicMuteFill />
                  </div>
                ) : (
                  ""
                )}
                <img src="images/user-img.jpg" alt="" />
                <p>
                  <span>*</span>
                  {item.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              props.setSheetVisible(false);
            }}
          >
            <img src="/images/hand-peace.png" alt="" />
            Leave Quietly
          </button>
          <div>
            <button>
              <AiOutlinePlus />
            </button>
            <button>
              <img src="images/stopHandIcon.png" alt="" />
            </button>
            <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
              {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
