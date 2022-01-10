import React from "react";
import "../../Style/bottomSheet.css";
import { FcGlobe } from "react-icons/fc";
import { useState } from "react/cjs/react.development";

export default function StartRoom(props) {
  const [room, setRoom] = useState("open");

  return (
    <>
      <div className="switch_Line"></div>
      <div className="text-end">
        <button className="addTopicBtn">+ Add a topic</button>
      </div>
      <div className="selectRoom">
        <button
          className={room === "open" ? "active" : ""}
          onClick={() => setRoom("open")}
        >
          <div>
            <FcGlobe />
          </div>
          Open
        </button>

        <button
          className={room === "social" ? "active" : ""}
          onClick={() => setRoom("social")}
        >
          <div>
            <FcGlobe />
          </div>
          Social
        </button>

        <button
          className={room === "closed" ? "active" : ""}
          onClick={() => setRoom("closed")}
        >
          <div>
            <FcGlobe />
          </div>
          Closed
        </button>
      </div>
      <p>
        Start a room{" "}
        <span>
          {room === "closed"
            ? "for people I choose"
            : room === "social"
            ? "with people I follow"
            : "open to everyone"}
        </span>
      </p>
      <div className="text-center">
          <button className="letGoBtn" onClick={() => {
              props.setSheetCreateRoom(true);
              props.setSheetVisible(true)
          }}>
              Let's go
          </button>
      </div>
    </>
  );
}
