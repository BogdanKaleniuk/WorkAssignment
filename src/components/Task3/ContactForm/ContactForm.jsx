import React from "react";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    console.log(e.target.elements.name.value);
    e.target.elements.number.value, e.preventDefault();
    onAdd({
      id: Date.now(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input
        type="text"
        name="number"
        placeholder="Name"
        required
        pattern="[0-9]+"
      />
      <button>Add contact</button>
    </form>
  );
};

export default ContactForm;
