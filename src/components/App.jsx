import React from "react";
import Profile from "./Profile/Profile";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import FriendList from "./Friends/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <h1>
        <h2 className="center-container">1</h2>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
        <h2 className="center-container">2</h2>
      </h1>
    </>
  );
};

export default App;
