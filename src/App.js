import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailList from "./EmailList";
import Mail from "./Mail";
import SendMail from "./SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/counter/MailSlice";
import { login, selectUser } from "./features/counter/UserSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    });
  }, []);
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}
export default App;
