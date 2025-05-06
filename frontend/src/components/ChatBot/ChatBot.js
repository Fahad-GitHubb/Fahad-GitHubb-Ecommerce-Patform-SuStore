import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi there! Welcome to SuStore. How can I help you today?', isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Predefined responses based on keywords
  const botResponses = {
    'product': 'We have a wide range of products. You can browse our categories or tell me what you\'re looking for.',
    'price': 'Our prices are competitive and we often have sales. Is there a specific product you\'re interested in?',
    'shipping': 'We offer free shipping on orders over $50. Standard shipping takes 3-5 business days.',
    'return': 'We have a 30-day return policy. You can return any unused item within 30 days for a full refund.',
    'payment': 'We accept all major credit cards, PayPal, and Apple Pay.',
    'order': 'You can track your order in your account dashboard. Need help finding it?',
    'login': 'You can login using your email and password. If you\'ve forgotten your password, you can reset it.',
    'register': 'You can create a new account by clicking on the "Sign Up" button in the top right corner.',
    'wishlist': 'You can add items to your wishlist by clicking the heart icon on any product.',
    'contact': 'You can reach our customer service team at support@sustore.com or call us at 1-800-SUSTORE.',
    'help': 'I\'m here to help! Ask me about products, shipping, returns, or anything else about SuStore.',
  };

  // Simple response generation
  const generateResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
    
    // Check for keyword matches
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (lowerCaseInput.includes(keyword)) {
        return response;
      }
    }
    
    // Default response if no keywords match
    return "I'm not sure I understand. Can you rephrase or ask about our products, shipping, returns, or payment options?";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { text: inputValue, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate typing delay before bot responds
    setTimeout(() => {
      const botResponse = { text: generateResponse(inputValue), isBot: true };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <button className="chatbot-toggle" onClick={toggleChat}>
          <span className="chat-icon">💬</span>
          <span className="chat-text">Chat with us</span>
        </button>
      ) : (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>SuStore Assistant</h3>
            <button className="close-button" onClick={toggleChat}>×</button>
          </div>
          <div className="messages-container">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
              >
                {message.isBot && <span className="bot-icon">🤖</span>}
                <div className="message-text">{message.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="chatbot-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="chatbot-input"
            />
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;