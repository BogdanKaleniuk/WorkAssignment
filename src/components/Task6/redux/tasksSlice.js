import { createAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [
      { id: 0, text: "Learn", completed: true },
      { id: 1, text: "Learn", completed: true },
      { id: 2, text: "Learn", completed: false },
      { id: 3, text: "Learn", completed: true },
      { id: 4, text: "Learn", completed: true },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        items: state.items.filter((task) => task.id !== action.payload),
      };
    },
    toggleCompleted: (state, action) => {
      return {
        ...state,

        items: state.items.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }
          return {
            ...task,
            completed: !task.completed,
          };
        }),
      };
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = slice.actions;
export default slice.reducer;
