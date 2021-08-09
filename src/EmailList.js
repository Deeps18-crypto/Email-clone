import { Button, Checkbox, Hidden, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./EmailList.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import Section from "./Section";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/UserSlice";

function EmailList() {
  const dispatch = useDispatch();
  var user = useSelector(selectUser);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmail(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  const [email, setEmail] = useState([]);
  const history = useHistory();

  return (
    <div className="emailList">
      <Hidden only={["sm", "xs"]}>
        <div className="emailList__settings">
          <div className="emailList__settingsLeft">
            <IconButton>
              <Checkbox />
            </IconButton>
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
              <RedoIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="emailList__settingRight">
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <IconButton>
              <KeyboardHideIcon />
            </IconButton>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </div>
        </div>
        <div className="emailList__section">
          <Section Icon={InboxIcon} title="primary" color="red" selected />
          <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
          <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
        </div>
      </Hidden>

      {email.map(({ id, data }) => (
        <EmailRow
          key={id}
          title={data.to}
          time={new Date(data.timestamp?.seconds * 1000).toString()}
          description={data.message}
          subject={data.subject}
        />
      ))}
      <Hidden only={["md", "lg", "xl"]}>
        <h4
          className="emailList__compose"
          startIcon={<AddIcon fontSize="large" />}
          onClick={() => history.push("/composeMail")}
        >
          Compose
        </h4>
      </Hidden>
    </div>
  );
}

export default EmailList;
