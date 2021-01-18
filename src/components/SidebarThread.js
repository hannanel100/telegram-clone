import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarThread.css";
const SidebarThread = ({ threadName }) => {
  return (
    <div className="sidebarThread">
      <Avatar />
      <div className="sidebarThread__details">
        <h3>{threadName}</h3>
        <p>this is the thread</p>
        <small className="sidebarThread__timestamp">timestamp</small>
      </div>
    </div>
  );
};

export default SidebarThread;
