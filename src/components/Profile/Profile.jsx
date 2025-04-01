import React from "react";
import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile-container">
      <div className="profile">
        <img className="profile-avatar" src={image} alt={name} width="120" />
        <h1 className="profile-name">{name}</h1>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
        <ul className="profile-stats">
          <li>
            <span className="stats-label">Followers</span>
            <span className="stats-value">{stats.followers}</span>
          </li>
          <li>
            <span className="stats-label">Views</span>
            <span className="stats-value">{stats.views}</span>
          </li>
          <li>
            <span className="stats-label">Likes</span>
            <span className="stats-value">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
