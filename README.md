# NextPlay Sportsbook AI

AI-powered sports betting analysis that collects odds data, builds predictive models, and identifies value bets using machine learning and market insights.

An in-app AI assistant for a sports betting platform that helps users understand betting markets, interpret odds, analyze matchups, and make informed betting decisions.

## Features

- 🤖 AI-powered chat interface for betting questions
- 📊 Explains odds, spreads, totals, moneylines, parlays, and props
- 🎯 Matchup analysis and betting strategy guidance
- ⚠️ Responsible gambling prompts and safety features
- 💬 Modern, responsive chat UI styled like a professional sportsbook

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Modern CSS** - Styled components with gradients and animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ChatMessage.jsx      # Message display component
│   │   └── ChatMessage.css
│   ├── services/
│   │   └── aiService.js          # AI service (currently mocked)
│   ├── App.jsx                   # Main app component
│   ├── App.css
│   ├── main.jsx                  # Entry point
│   └── index.css
├── AI_Sportsbetting/
│   ├── system_prompt.txt         # System prompt (copy/paste ready)
│   └── system_prompt.json        # System prompt (structured)
├── index.html
├── package.json
└── vite.config.js
```

## AI Integration

The app currently uses a mock AI service. To integrate with a real AI API (OpenAI, Anthropic, etc.):

1. Update `src/services/aiService.js`
2. Replace the `sendMessageToAI` function with an actual API call
3. Pass the `SYSTEM_PROMPT` constant to your AI API as the system message

Example integration:

```javascript
export async function sendMessageToAI(userMessage, conversationHistory) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemPrompt: SYSTEM_PROMPT,
      messages: conversationHistory,
      userMessage: userMessage
    })
  })
  
  const data = await response.json()
  return data.message
}
```

## System Prompt

The system prompt is located in `AI_Sportsbetting/system_prompt.txt` and defines:
- Tone and style guidelines
- Allowed and forbidden actions
- Responsible gambling protocols
- Data usage rules

## License

MIT
