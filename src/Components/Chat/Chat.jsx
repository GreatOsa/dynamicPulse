import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Welcome Dynamic Pulse Trades! 💬</h1>
        <p>
          Whether you have a specific question or need assistance, we’re here
          for you.
        </p>
      </div>
      <div className="chat-button">
        <button>Let’s chat</button>
      </div>
    </div>
  );
};

export default Chat;
