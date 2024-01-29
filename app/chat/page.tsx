'use client'
import React, { useCallback, useState, useEffect, useRef, ChangeEvent } from 'react';
import ChatRoom from '@/src/_components/chatRoom/ChatRoom';
import styles from './page.module.scss';
import { HealthcareProvider } from '../../src/types/interfaces';
import { getHealthCareProviderData } from '../../src/_functions/getHealthCareProviders'
import HealthcareProvidersDropdown from '../../src/_components/chooseHealthCareCenter/chooseHealthCareCenter';
import DynamicButton from '../../src/_components/dynamicButton/dynamicButton';
import { Channel, Chat, Message, MixedTextTypedElement, TimetokenUtils, User  } from '@pubnub/chat';

const userData = [
  {
    id: "support-agent",
    data: { name: "John (Support Agent)", custom: { initials: "SA", avatar: "#59B9FF" } },
  },
  {
    id: "supported-user",
    data: { name: "Mary Watson", custom: { initials: "MW", avatar: "#F28496" } },
  },
]
const randomizedUsers = Math.random() < 0.5 ? userData : userData.reverse()

const ChatPage: React.FC = () => {
  const [hasActiveChat, setHasActiveChat] = useState<boolean>(false);
  const [healthCareProviders, setHealthCareProviders] = useState<HealthcareProvider[]>([]);
  const [selectedHealthcareProvider, setSelectedHealthcareProvider] = useState<HealthcareProvider | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedProvider, setSelectedProvider] = useState<HealthcareProvider | null>(null);
  const [chat, setChat] = useState<Chat>();
  const [text, setText] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [channel, setChannel] = useState<Channel>();
  const [messages, setMessages] = useState<Message[]>([]);
  const messageListRef = useRef<HTMLElement>(null);

  async function handleSend(event: React.SyntheticEvent) {
    event.preventDefault()
    if (!text || !channel) return
    await channel.sendText(text)
    setText("")
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData: HealthcareProvider[] = await getHealthCareProviderData();
        console.log('jsonData: ', jsonData)
        setHealthCareProviders(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching healthcare provider data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  },[]);

  useEffect(() => {
    if (!messageListRef.current) return
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight
  }, [messages])

  useEffect(() => {
    if (!channel) return
    const users = channel.getMembers()
    console.log(users);
    return channel.connect((message) => setMessages((messages) => [...messages, message]))
  }, [channel])

  useEffect(() => {
    async function initalizeChat() {
      const chat = await Chat.init({
        publishKey: process.env.PUBNUB_PUB_KEY,
        subscribeKey: process.env.PUBNUB_SUB_KEY,
        userId: randomizedUsers[0].id,
      })
      const currentUser = await chat.currentUser.update(randomizedUsers[0].data)
      const interlocutor =
        (await chat.getUser(randomizedUsers[1].id)) ||
        (await chat.createUser(randomizedUsers[1].id, randomizedUsers[1].data))
      const { channel } = await chat.createDirectConversation({
        user: interlocutor,
        channelData: { name: "Support Channel" },
      })
      setChat(chat)
      setUsers([currentUser, interlocutor])
      setChannel(channel)
    }

    initalizeChat()
  }, [])

  const renderMessagePart = useCallback((messagePart: MixedTextTypedElement) => {
    if (messagePart.type === "text") {
      return messagePart.content.text
    }
    if (messagePart.type === "plainLink") {
      return <a href={messagePart.content.link}>{messagePart.content.link}</a>
    }
    if (messagePart.type === "textLink") {
      return <a href={messagePart.content.link}>{messagePart.content.text}</a>
    }
    if (messagePart.type === "mention") {
      return <a href={`https://pubnub.com/${messagePart.content.id}`}>{messagePart.content.name}</a>
    }

    return ""
  }, [])

  if (!chat || !channel) return <p>Loading...</p>

  // useEffect(() => {
    
  //   const checkActiveChat = () => {
      
  //     setTimeout(() => {
  //       const isChatActive = false;
  //       setHasActiveChat(isChatActive);
  //     }, 1000); 
  //   };

  //   checkActiveChat();
  // }, []); 

  const startChat = () => {
    setHasActiveChat(true);
  };

  const handleProviderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    if (healthCareProviders !== null){
      const provider = healthCareProviders.find((p) => p.id === selectedId) || null;
    setSelectedProvider(provider);
    }
  };


  return (
    <>
      {isLoading ? (
        <section className={styles.loadingContainer}>
          <p className={styles.loadText}>Laddar...</p>
        </section>
      ) : hasActiveChat ? (
        // Render the second part when there is an active chat
        <main>
          <header className={styles.chatRoomHeader}>
            <h3 className={styles.chatRoomTitle}>{'Chat med ' + selectedProvider?.name + ', ' + selectedProvider?.city}</h3>
            <h3 className={styles.userName}>{chat.currentUser.name}</h3>
          </header>
  
          <section className="message-list" ref={messageListRef}>
            <ol>
              {messages.map((message) => {
                const user = users.find((user) => user.id === message.userId)
                return (
                  <li key={message.timetoken}>
                    <aside style={{ background: String(user?.custom?.avatar) }}>
                      {user?.custom?.initials}
                    </aside>
                    <article>
                      <h3>
                        {user?.name}
                        <time>
                          {TimetokenUtils.timetokenToDate(message.timetoken).toLocaleTimeString([], {
                            timeStyle: "short",
                          })}
                        </time>
                      </h3>
                      <p>
                        {message
                          .getLinkedText()
                          .map((messagePart: MixedTextTypedElement, i: number) => (
                            <span key={String(i)}>{renderMessagePart(messagePart)}</span>
                          ))}
                      </p>
                    </article>
                  </li>
                )
              })}
            </ol>
          </section>
  
          <form className={styles.postMessageContainer} onSubmit={handleSend}>
            <input
              className={styles.messageInput}
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Skicka meddelande"
            />
            <input className={styles.sendButton} type="submit" value="Skicka" onClick={handleSend} />
          </form>
        </main>
      ) : (
        // Render the first part when there is no active chat
        <section key={JSON.stringify(healthCareProviders)}>
          <h1 className={styles.pageTitle}>
            {hasActiveChat
              ? `Chat med ${selectedProvider?.name || 'din vårdcentral'}`
              : 'Chatta med din vårdcentral'}
          </h1>
          <section className={styles.chatContent}>
            {!hasActiveChat && healthCareProviders !== null && (
              <select className={styles.dropDown} id='healthcareProvider' onChange={handleProviderChange}>
                <option value=''>Välj din vårdcentral...</option>
                {healthCareProviders.map((provider) => (
                  <option key={provider.id} value={provider.id}>
                    {provider.name + ', ' + provider.city}
                  </option>
                ))}
              </select>
            )}
            <DynamicButton text='Starta chat' backgroundColor='#B0001E' onClick={startChat} />
            {hasActiveChat && selectedHealthcareProvider && <ChatRoom healthcareProvider={selectedHealthcareProvider} />}
          </section>
        </section>
      )}
    </>
  );  
};
export default ChatPage;
