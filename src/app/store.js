import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/counter/MailSlice";
import userReducer from "../features/counter/UserSlice";

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
