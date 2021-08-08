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
  const { register, handleSubmit, watch, errors } = useForm();
  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.textarea,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  return (
    <>
      <div className="compose">
        <div className="mail__tools">
          <div className="mail__toolsLeft">
            <IconButton onClick={() => history.push("/")}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton>Compose</IconButton>
            <Hidden only={["xs"]}>
              <IconButton>
                <MoveToInboxIcon />
              </IconButton>
              <IconButton>
                <EmailIcon />
              </IconButton>
              <IconButton>
                <ErrorIcon />
              </IconButton>
              <IconButton>
                <WatchLaterIcon />
              </IconButton>
              <IconButton>
                <CheckCircleIcon />
              </IconButton>
              <IconButton>
                <LabelImportantIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Hidden>
          </div>
          <div className="mail__toolsRight">
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <ExitToAppIcon />
            </IconButton>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="compose__head">
            <div className="compose__submit">
              <IconButton type="submit">
                <SendIcon />
              </IconButton>
            </div>

            <div className="compose__from">
              <p>From </p>&nbsp;&nbsp;
              <p className="compose__fromPara">{user.email}</p>
            </div>
            <div className="compose__to">
              <input
                placeholder="To"
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
            <div>
              <textarea
                name="textarea"
                id=""
                cols="100"
                rows="100"
                type="text"
                placeholder="Message..."
                className="sendMail__message"
                ref={register({ required: true })}
              ></textarea>
              {errors.textarea && <p className="sendMail__error">required</p>}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Compose;
