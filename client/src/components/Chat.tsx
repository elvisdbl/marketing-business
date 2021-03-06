import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const Chat = () => {
  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!");
  });

  const handleNewUserMessage = (newMessage: any) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    <>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Sam"
        subtitle="Customer Service"
      />
    </>
  );
};

export default Chat;
