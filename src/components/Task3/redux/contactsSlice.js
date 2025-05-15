import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [initialContacts],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
    fetchInProgress: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    fetchError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addContact,

  deleteContact,
  fetchInProgress,
  fetchSuccess,
  fetchError,
} = contactsSlice.actions;
export default contactsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import initialContacts from "../contacts.json";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: initialContacts,
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     addContact: (state, action) => {
//       state.items.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       return state.filter((contact) => contact.id !== action.payload);
//     },
//     fetchInProgress: (state) => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     fetchSuccess: (state, action) => {
//       state.isLoading = false;
//       state.items = action.payload;
//     },
//     fetchError: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   addContact,

//   deleteContact,
//   fetchInProgress,
//   fetchSuccess,
//   fetchError,
// } = contactsSlice.actions;
// export default contactsSlice.reducer;
