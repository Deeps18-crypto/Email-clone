import { Checkbox, Hidden, IconButton } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import React from "react";
import "./EmailRow.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/counter/MailSlice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flex: "1",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flex: "1",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flex: "1",
    },
  },
}));

function EmailRow({ title, description, id, subject, time, message }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        description,
        subject,
        time,
      })
    );
    history.push("/mail");
  };
  const classes = useStyles();
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Hidden only={["sm", "xs"]}>
          <Checkbox />
          <IconButton>
            <StarBorderOutlinedIcon />
          </IconButton>
        </Hidden>

        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <Hidden only={["lg", "sm", "md"]}>
        <div className="xsTimeAndTitle">
          <div className="xsEmailRow">
            <h5>{title}</h5>
            <h6 className="emailRow__xsSubject">
              {subject}{" "}
              <spam className="emailRow__xsdescription">- {description}</spam>
            </h6>
          </div>
        </div>
        <div className="xsEmailRow_Time">
          <p>{time}</p>
        </div>
      </Hidden>
      <Hidden only="xs">
        <div className={classes.root}>
          <h3 className="emailRow__title">{title}</h3>
          <div className="emailRow__message">
            <h4>
              {subject}{" "}
              <spam className="emailRow__description">- {description}</spam>
            </h4>
          </div>
          <div className="emailRow__time">{time}</div>
        </div>
      </Hidden>
    </div>
  );
}

export default EmailRow;
