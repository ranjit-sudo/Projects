import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import ExportMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import db, { auth } from "./firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter Text Channel Name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };
  console.log(channels);
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>Server</h3>
        <ExportMoreIcon />
      </div>

      <div className="sidebar_channels">
        <div className="sidebar_channelHeader">
          <div className="sidebar_header">
            <ExportMoreIcon />
            <h3>Text Channel</h3>
          </div>

          <AddIcon onClick={handleAddChannel} className="sidebar_addChannel" />
        </div>
        <div className="sidebar_channelList">
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>
      <div className="sidebar_voice">
        <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large" />
        <div className="sidebar_voiceInfo">
          <h3>Voice Connected</h3>
          <p>stream</p>
        </div>
        <div className="sidebar_voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar_profile">
        <Avatar
          className="avatar"
          onClick={() => auth.signOut()}
          src={user.photo}
        />
        <div className="sidebar_profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 6)}</p>
        </div>
        <div className="sidebar_profileIcons">
          <MicIcon className="A" />
          <HeadsetIcon className="B" />
          <SettingsIcon className="C" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
