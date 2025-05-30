export const selectUser = (state) => state.users.list;
export const selectStatus = (state) => state.users.status;
export const selectError = (state) => state.users.error;

export const selectIsLoading = (state) => state.users.status === "loading";
export const selectIsError = (state) => state.users.status === "failed";
export const selectHasUsers = (state) => state.users.list.length > 0;
