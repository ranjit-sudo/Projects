import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";

function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      {/* <h3>Header</h3> */}
      <div className="chatHeader_left">
        <h3>
          <span className="chatHeader_hash">#</span>
          {channelName ? channelName : "Click Your Profile Icon to LogOut"}
        </h3>
      </div>

      <div className="chatHeader_right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

        <div className="chatHeader_search">
          <input type="text" placeholder="Search" />
          <SearchRoundedIcon />
        </div>

        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
