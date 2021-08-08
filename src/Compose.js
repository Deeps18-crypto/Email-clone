import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/counter/UserSlice";
import "./Compose.css";
import { Hidden, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import EmailIcon from "@material-ui/icons/Email";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import { selectOpenMail } from "./features/counter/MailSlice";

function Compose() {
  const user = useSelector(selectUser);
  const history = useHistory();
  return (
    <div className="compose">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
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
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="compose__head">
        <div className="compose__from">
          <p>From </p>&nbsp;&nbsp;
          <p className="compose__fromPara">{user.email}</p>
        </div>
        <div className="compose__to">
          <input placeholder="To" />
        </div>
        <div className="compose__to">
          <input placeholder="Subject" />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Compose;
