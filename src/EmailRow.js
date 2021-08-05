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
    padding: theme.spacing(1.5),
    [theme.breakpoints.down("sm")]: {
      display:"block"
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {},
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
    <div onClick={openMail} className="emailRow" className={classes.root}>
      <Hidden only={["sm", "xs"]}>
        <div className="emailRow__options">
          <Checkbox />
          <IconButton>
            <StarBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
        </div>
      </Hidden>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <spam className="emailRow__description">- {description}</spam>
        </h4>
      </div>
      <Hidden only={["sm", "xs"]}>
        <div className="emailRow__time">{time}</div>
      </Hidden>
    </div>
  );
}

export default EmailRow;
