import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser, addUser } from "./usersSlice";
import { selectError, selectStatus, selectUser } from "./usersSelectors";

function Test() {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOpen = () => {
    if (!isOpen) {
      dispatch(fetchUsers());
    }
    setIsOpen(!isOpen);
  };
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleAddUser = () => {
    if (name.trim() === "" || email.trim() === "") {
      alert("Заповніть всі поля");
    }
    dispatch(addUser({ name, email }));
    setName("");
    setEmail("");
  };

  return (
    <div>
      <button onClick={handleOpen}>{isOpen ? "Close" : "Open"}</button>
      <h1>
        {users.length} User{users.length !== 1 ? "'s" : ""}{" "}
      </h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {isOpen && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Test;
