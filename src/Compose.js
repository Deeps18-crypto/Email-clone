import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/counter/UserSlice";
import "./Compose.css";
import { Hidden, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import EmailIcon from "@material-ui/icons/Email";
import ErrorIcon from "@material-ui/icons/Error";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "./features/counter/MailSlice";
import { db } from "./firebase";
import firebase from "firebase";

function Compose() {
  const { register, handleSubmit, errors } = useForm();
  var user = useSelector(selectUser);

  const history = useHistory();
  console.log(user, "->>>");

  const onSubmit = (data) => {
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.textarea,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    history.push("/");
  };
  return (
    <Hidden only={["md", "lg", "xl", "sm"]}>
      <>
        <div className="compose">
          <div className="mail__tools">
            <div className="mail__toolsLeft">
              <IconButton onClick={() => history.push("/")}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton>Compose</IconButton>
            </div>
          </div>
          <div className="compose__head">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="compose__submit">
                <IconButton>
                  <PrintIcon />
                </IconButton>
                <IconButton type="submit">
                  <SendIcon />
                </IconButton>
              </div>

              <div className="compose__from">
                <p>From : </p>&nbsp;&nbsp;
                <p className="compose__fromPara">{user.email}</p>
              </div>
              <div className="compose__to">
                <input
                  placeholder="To "
                  name="to"
                  type="email"
                  ref={register({ required: true })}
                />
                {errors.to && <p className="Compose__error">required</p>}
              </div>
              <div className="compose__to">
                <input
                  type="text"
                  placeholder="Subject"
                  ref={register({ required: true })}
                  name="subject"
                />
                {errors.subject && <p className="Compose__error">required</p>}
              </div>
              <div className="compose__message">
                <textarea
                  name="textarea"
                  type="text"
                  placeholder="message"
                  ref={register({ required: true })}
                />
                {errors.textarea && <p className="Compose__error">required</p>}
              </div>
            </form>
          </div>
        </div>
      </>
    </Hidden>
  );
}

export default Compose;
