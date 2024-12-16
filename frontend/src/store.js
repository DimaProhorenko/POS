import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "./features/auth/authApiSlice";
import { userManagementApiSlice } from "./features/user-management/userManagementApiSlice";
import { productApiSlice } from "./features/product/productApiSlice";

const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [userManagementApiSlice.reducerPath]: userManagementApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApiSlice.middleware)
      .concat(userManagementApiSlice.middleware)
      .concat(productApiSlice.middleware);
  },
});

export default store;
