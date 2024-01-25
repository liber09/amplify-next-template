'use client'
import React, { useState, useEffect } from 'react';
import MessageList from '../messageList/MessageList';
import ChatInput from '../chatInput/ChatInput';
import io from 'socket.io-client';
import { HealthcareProvider } from '@/src/types/interfaces';

const socket = io('http://localhost:3001');

interface Message {
  text: string;
  timestamp: string;
}
interface ChatRoomProps {
  healthcareProvider: HealthcareProvider;
}


const ChatRoom: React.FC<ChatRoomProps> = ({ healthcareProvider }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on('message', (message: Message) => {
      console.log('Received message:', message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (text: string) => {
    const message: Message = { text, timestamp: new Date().toISOString() };
    socket.emit('message', message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <section>
      <MessageList messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </section>
  );
};

export default ChatRoom;
