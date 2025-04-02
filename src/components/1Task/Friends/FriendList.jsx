import React from "react";
import Friend from "./Friend";
import "./Friend.css"; // Додамо стилі
import { v4 as uuidv4 } from "uuid";

const FriendList = ({ friends }) => {
  return (
    <div className="friend-list flex-container">
      {friends.map(({ avatar, name, isOnline }) => (
        <Friend key={uuidv4} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </div>
  );
};

export default FriendList;
