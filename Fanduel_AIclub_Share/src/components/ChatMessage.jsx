import './ChatMessage.css'

function ChatMessage({ message }) {
  const isUser = message.role === 'user'
  
  return (
    <div className={`message ${message.role}`}>
      <div className="message-content">
        <div className="message-text">{message.content}</div>
        <div className="message-time">
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  )
}

export default ChatMessage

