import React from "react";
import ContactList from "./Contacts/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchError,
  fetchInProgress,
  fetchSuccess,
} from "./redux/contactsSlice";

const Task3 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        dispatch(fetchInProgress());
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        const normalizedData = data.map((user) => ({
          id: user.id,
          name: user.name,
          number: user.phone,
        }));
        dispatch(fetchSuccess(normalizedData));
      } catch (error) {
        dispatch(fetchError(error.message));
      }
    };

    fetchContacts();
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

// const Task3 = () => {
//   const [contacts, setContacts] = useState(initialContacts);
//   const [filter, setFilter] = useState("");

//   const addContact = (newContact) => {
//     setContacts((prevContact) => {
//       return [...prevContact, newContact];
//     });
//   };

//   const visibleContacts = contacts.filter((contact) =>
//     contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
//   );

//   const deleteContact = (contactId) => {
//     setContacts((prevContact) => {
//       return prevContact.filter((contact) => contact.id !== contactId);
//     });
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onAdd={addContact} />
//       <SearchBox value={filter} onFilter={setFilter} />
//       <ContactList contacts={visibleContacts} onDelete={deleteContact} />
//     </div>
//   );
// };
///
export default Task3;
