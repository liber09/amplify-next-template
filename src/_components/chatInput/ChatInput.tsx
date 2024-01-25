"use client"
import React, { useState } from 'react';

interface ChatInputProps {
  sendMessage: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ sendMessage }) => {
  const [text, setText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSendMessage = () => {
    console.log('Sending message:', text); 
    if (text.trim() !== '') {
        sendMessage(text);
        setText('');
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleSendMessage}>Skicka</button>
    </div>
  );
};

export default ChatInput;
