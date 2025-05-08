import { createAction } from "@reduxjs/toolkit";

export const setStatusFilter = createAction("filters/setStatusFilter");

const initialState = {
  status: "all",
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
}
