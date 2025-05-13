import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
