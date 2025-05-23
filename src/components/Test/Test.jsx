import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";

function Test() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) {
      dispatch(fetchUsers());
    }
    setIsOpen(!isOpen);
  };
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);
  ///

  return (
    <div>
      <button onClick={handleOpen}>{isOpen ? "Close" : "Open"}</button>
      <h1>Users</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {isOpen && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Test;
