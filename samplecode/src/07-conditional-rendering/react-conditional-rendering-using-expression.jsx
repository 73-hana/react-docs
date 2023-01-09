import React from "react";

export default function ReactConditionalRenderingUsingExpression(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Messages</h1>
      {unreadMessages.length > 0 &&
        <h2>Message: {unreadMessages.length} unread messages.</h2>
      }
    </div>
  );
}