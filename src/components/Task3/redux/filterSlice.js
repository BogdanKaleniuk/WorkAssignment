import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    filtersContact: (state, action) => action.payload,
  },
});
export const { filtersContact } = filtersSlice.actions;
export default filtersSlice.reducer;
