import React from "react";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};

export default Contact;
