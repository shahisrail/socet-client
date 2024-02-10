// SendMessageForm.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Connect to server

const SendMessageForm = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('send-message', { text: message });
      setMessage('');
    }
  };

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
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default SendMessageForm;
