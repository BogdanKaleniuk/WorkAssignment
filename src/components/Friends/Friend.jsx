import React from "react";
import "./Friend.css"; // Додамо стилі

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend">
      <img src={avatar} alt={name} width="48" className="friend-avatar" />
      <p className="friend-name">{name}</p>
      <p className={`friend-status ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default Friend;
