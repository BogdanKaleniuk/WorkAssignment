import React from "react";
import Profile from "./Profile/Profile";
import FriendList from "./Friends/FriendList";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const Task1 = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default Task1;
