import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "./features/counter/UserSlice";
import { auth, provider } from "./firebase";
import Hidden from "@material-ui/core/Hidden";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <>
      <div className="header">
        <div className="header__left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
            alt=""
          />
        </div>
        <Hidden only={["sm", "xs"]}>
          <div className="header__middle">
            <SearchIcon />
            <input placeholder="Search Email" type="text" />
            <ArrowDropDownIcon />
          </div>
        </Hidden>
        <div className="header__right">
          <IconButton onClick={signOut}>Logout</IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <Avatar src={user?.photoUrl} />
        </div>
      </div>
    </>
  );
}

export default Header;
