import { useState, useRef, useEffect } from 'react'
import ChatMessage from './components/ChatMessage'
import { sendMessageToAI } from './services/aiService'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hey! I'm NextPlay Sportsbook AI. I'm here to help you understand betting markets, interpret odds, and analyze matchups. What can I help you with today?",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await sendMessageToAI(input.trim(), messages)
      const aiMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage = {
        role: 'assistant',
        content: "Sorry, I'm having trouble processing that right now. Please try again!",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🔥 NextPlay Sportsbook</h1>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-label">Live Games</span>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Your Balance</span>
              <span className="stat-value">$1,250.00</span>
            </div>
          </div>
        </div>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>Quick Actions</h3>
            <button className="sidebar-button">Live Betting</button>
            <button className="sidebar-button">My Bets</button>
            <button className="sidebar-button">Promotions</button>
          </div>
          <div className="sidebar-section">
            <h3>Popular Games</h3>
            <div className="game-preview">
              <div className="game-teams">KC vs BUF</div>
              <div className="game-odds">-150 / +130</div>
            </div>
            <div className="game-preview">
              <div className="game-teams">SF vs DAL</div>
              <div className="game-odds">-110 / -110</div>
            </div>
          </div>
        </aside>

        <main className="chat-container">
          <div className="chat-header">
            <h2>AI Betting Assistant</h2>
            <p>Ask me anything about odds, spreads, or betting strategies</p>
          </div>
          <div className="messages-list">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {isLoading && (
              <div className="message assistant">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="input-form" onSubmit={handleSend}>
            <input
              type="text"
              className="message-input"
              placeholder="Ask about odds, spreads, matchups, or betting strategies..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="send-button"
              disabled={isLoading || !input.trim()}
            >
              Send
            </button>
          </form>
        </main>
      </div>

      <footer className="app-footer">
        <p>21+ | Please Gamble Responsibly | Bet with your head, not over it</p>
      </footer>
    </div>
  )
}

export default App
