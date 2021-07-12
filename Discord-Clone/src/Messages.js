import React from "react";
import "./Messages.css";
import { Avatar } from "@material-ui/core";

function Messages({ timestamp, user, message }) {
  return (
    <div className="messages">
      <Avatar src={user.photo} />
      <div className="messages_info">
        <h4>
          {user.displayName}
          <span className="messages_timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}{" "}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Messages;
