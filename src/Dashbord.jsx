// MessageList.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Connect to server

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);
  // MessageList.js and SendMessageForm.js
useEffect(() => {
    console.log("Connecting to server...");
    const socket = io("http://localhost:5000");
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    return () => {
      console.log("Disconnecting from server...");
      socket.disconnect();
    };
  }, []);
  

  return (
    <div>
      <h2>show chat </h2>
      {messages.map((message, index) => (
        <div key={index}>{message.text}</div>
      ))}
    </div>
  );
};

export default MessageList;
