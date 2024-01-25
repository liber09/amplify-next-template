import React from 'react';
import styles from './messagelist.module.scss'; // Import your stylesheet

interface Message {
  text: string;
  timestamp: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => (
  <ul className={styles.messageList}>
    {messages.map((message, index) => (
      <li key={index} className={styles.messageItem}>
        <div className={styles.messageText}>{message.text}</div>
        <div className={styles.messageTimestamp}>{formatTimestamp(message.timestamp)}</div>
      </li>
    ))}
  </ul>
);

const formatTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

export default MessageList;