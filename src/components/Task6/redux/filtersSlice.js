import { createSlice } from "@reduxjs/toolkit";

const filtersTaskSlice = createSlice({
  name: "taskFilters", // <<< змінив назву, щоб не конфліктувала
  initialState: {
    status: "all",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersTaskSlice.actions;
export default filtersTaskSlice.reducer;
