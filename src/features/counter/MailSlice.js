import { createSlice } from "@reduxjs/toolkit";

export const MailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    selectedMail: null,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = MailSlice.actions;

export const selectSendMessageIsOpen = (state) =>
  state.counter.sendMessageIsOpen;

export default MailSlice.reducer;
