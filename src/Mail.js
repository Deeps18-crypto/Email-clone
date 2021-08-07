import React from "react";
import "./Mail.css";
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
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/counter/MailSlice";

function Mail() {
  const history = useHistory();
  const selectMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
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
      <Hidden only={["ls", "xl"]}>
        <div className="mail__bodyHeader">
          <h2>{selectMail?.subject}</h2>
          <p className="mail__time">{selectMail?.time}</p>
        </div>
        <div className="mail__bodyAlign">
          <LabelImportantIcon className="mail__important" />
          <p>{selectMail?.title}</p>
        </div>

        <div className="mail__messageAlign">
          <p>{selectMail?.description}</p>
        </div>
      </Hidden>
      <Hidden only={["xs"]}>
        <div className="mail__body">
          <div className="mail__bodyHeader">
            <h2>{selectMail?.subject}</h2>
            <LabelImportantIcon className="mail__important" />
            <p>{selectMail?.title}</p>
            <p className="mail__time">{selectMail?.time}</p>
          </div>
          <div className="mail__message">
            <p>{selectMail?.description}</p>
          </div>
        </div>
      </Hidden>
    </div>
  );
}

export default Mail;
