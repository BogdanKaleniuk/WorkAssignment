import { configureStore } from "@reduxjs/toolkit";

// Task3
import contactsReducer from "./Task3/redux/contactsSlice";
import contactFilterReducer from "./Task3/redux/filterSlice"; // цей називаємо filter

// Task6
import tasksReducer from "./Task6/redux/tasksSlice";
import taskFilterReducer from "./Task6/redux/filtersSlice"; // цей називаємо filters

export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Task3
    filter: contactFilterReducer,
    tasks: tasksReducer, // Task6
    filters: taskFilterReducer,
  },
});
