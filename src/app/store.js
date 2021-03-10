import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/MailSlice";

export default configureStore({
  reducer: {
    mail: counterReducer,
  },
});
