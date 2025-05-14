
const ChatList = ({ chats }) => (
  <div className={styles.chatList}>
    {chats.map((chat, i) => (
      <div key={i} className={styles.chatItem}>
        <img src={chat.avatar} alt="avatar" />
        <div>
          <h4>{chat.name}</h4>
          <p>{chat.time}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ChatList;
