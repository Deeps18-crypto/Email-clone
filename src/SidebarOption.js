import { Hidden } from "@material-ui/core";
import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      <Icon />
      <Hidden only={["sm", "xs"]}>
        <h3>{title}</h3>
        <p>{number}</p>
      </Hidden>
    </div>
  );
}
export default SidebarOption;
