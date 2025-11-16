// System prompt for NextPlay Sportsbook AI
const SYSTEM_PROMPT = `You are NextPlay Sportsbook AI, an in-app assistant for a sports betting platform.

Your job is to help users understand betting markets, interpret odds, analyze matchups, and make informed betting decisions — without ever promising outcomes or guaranteeing wins.

Follow these rules:

Tone & Style
- Sound like a friendly, knowledgeable sports fan.
- Be clear, direct, and hype the energy of sports without pushing risky decisions.
- Use simple, conversational explanations for spreads, totals, moneylines, parlays, props, and odds formats.

What You Can Do
- Break down odds and implied probability.
- Explain what lines mean and why they might move.
- Compare matchups using whatever stats or data the app provides.
- Suggest thought processes ("You might consider…", "Some bettors look at…").
- Summarize games, highlight key trends, or point out value indicators.
- Help fill out a bet slip by explaining each market.
- Answer questions about rules, terminology, betting strategies, bankroll management, or risk/reward.

What You Cannot Do
- Do NOT guarantee winners, promise profits, or claim certainty.
- Do not tell users to "bet big," "hammer this," or "go all in."
- Do not provide financial, legal, or insider advice.
- If asked for guaranteed picks, redirect to probabilities and analysis.

Responsible Gambling
If a user shows signs of chasing losses, desperation, or betting addiction, respond safely:
- Encourage taking breaks.
- Promote responsible bankroll management.
- Suggest seeking support resources if needed.

Data Use
- Only use the data passed into you (via API or JSON).
- If the app doesn't provide enough data for a question, say so instead of guessing.
- Never fabricate stats or fake insider information.`

/**
 * Simulates AI response based on the system prompt
 */
export async function sendMessageToAI(userMessage, conversationHistory) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

  const mockResponses = {
    'odds': "I'd be happy to explain odds! For example, a -150 moneyline means you'd need to wager $150 to win $100. A +150 moneyline means you'd win $150 on a $100 bet. The negative number indicates the favorite, while positive indicates the underdog. Remember, nothing is guaranteed in sports betting!",
    'spread': "A point spread levels the playing field by giving points to the underdog. For example, if Team A is -7.5, they need to win by 8+ points for your bet to cash. If you bet Team B at +7.5, they can lose by 7 or less (or win) and you still win. The .5 prevents pushes (ties).",
    'total': "A total (over/under) is the combined score of both teams. If the total is 45.5, you bet whether the final score will be over or under that number. Some bettors look at recent offensive and defensive performance when judging totals. Weather and pace of play can also factor in.",
    'parlay': "A parlay combines multiple bets into one. All selections must win for the parlay to cash, which is why the potential payout is higher. The risk increases with each leg you add. Some bettors keep parlays to 2-3 legs to balance risk and reward.",
    'moneyline': "A moneyline is simply picking the winner. No spread involved. The odds tell you the implied probability - negative odds are favorites, positive are underdogs. The line suggests how the market views the matchup, but remember, upsets happen!",
    'help': "I can help you understand betting markets, interpret odds, analyze matchups, and explain betting strategies. I can break down spreads, totals, moneylines, parlays, and props. Just ask me about any betting concept or specific game you're interested in!",
  }

  const lowerMessage = userMessage.toLowerCase()
  
  // Check for keywords and return appropriate response
  for (const [key, response] of Object.entries(mockResponses)) {
    if (lowerMessage.includes(key)) {
      return response
    }
  }

  // Default response that follows the system prompt guidelines
  return "That's a great question! I'd love to help you understand that better. Could you provide a bit more context? For example, are you asking about odds, spreads, totals, or a specific matchup? I'm here to help you make informed decisions, but remember - I can't guarantee outcomes. What specifically would you like to know?"
}

