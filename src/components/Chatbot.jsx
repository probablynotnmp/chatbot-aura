import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X } from 'lucide-react';
import MessageBubble from './MessageBubble';
import QuickActions from './QuickActions';
import { detectIntent } from '../utils/intentDetector';
import { isContentSafe, getModerationResponse } from '../utils/contentFilter';
import { generateResponse } from '../utils/responseGenerator';
import { getAIResponse } from '../utils/apiHandler';

const Chatbot = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm Aura, your RoboPark guide! 🤖\n\nI can help you with:\n• Attraction details\n• Show schedules\n• Ticket pricing\n• Park navigation\n\nWhat would you like to explore today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (text) => {
        if (!text.trim()) return;

        // Add User Message
        const userMsg = {
            id: Date.now(),
            text: text,
            sender: 'user',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Process Message
        try {
            // 1. Content Moderation
            const safetyCheck = isContentSafe(text);
            if (!safetyCheck.safe) {
                const moderationResponse = getModerationResponse(safetyCheck.reason);
                setTimeout(() => {
                    addBotMessage(moderationResponse);
                }, 500);
                return;
            }

            // 2. Intent Detection
            const intent = detectIntent(text);

            // 3. Response Generation
            let response = generateResponse(intent);

            // 4. Fallback to AI if no rule-based response
            if (!response) {
                // Prepare history for AI context (last 5 messages)
                const history = messages.slice(-5).map(m => ({
                    role: m.sender === 'user' ? 'user' : 'assistant',
                    content: m.text
                }));

                response = await getAIResponse(text, history);
            }

            // Add Bot Response
            setTimeout(() => {
                addBotMessage(response);
            }, 600); // Small delay for natural feel

        } catch (error) {
            console.error("Error processing message:", error);
            addBotMessage("I'm having a little trouble connecting to my circuits right now. 🔌 Could you try asking that again?");
        }
    };

    const addBotMessage = (text) => {
        setMessages(prev => [...prev, {
            id: Date.now(),
            text: text,
            sender: 'bot',
            timestamp: new Date()
        }]);
        setIsTyping(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage(inputValue);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-white z-50 flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
            {/* Header */}
            <div className="bg-black p-4 flex items-center justify-between text-white border-b-4 border-primary">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black flex items-center justify-center clip-path-polygon-[0_0,100%_0,90%_100%,0%_100%] border border-primary">
                        <Bot size={24} className="text-primary" />
                    </div>
                    <div>
                        <h3 className="font-black text-2xl uppercase tracking-wider text-white">Aura</h3>
                        <p className="text-xs text-primary font-mono flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary animate-pulse"></span>
                            SYSTEM ONLINE
                        </p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 transition-colors border border-white/20 hover:border-primary"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                {messages.map(msg => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
                {isTyping && (
                    <div className="flex items-center gap-2 text-primary text-xs ml-2 mb-4 font-mono">
                        <span>PROCESSING</span>
                        <div className="w-1 h-1 bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1 h-1 bg-primary animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-1 h-1 bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="bg-white border-t border-gray-200 p-3">
                <QuickActions onAction={handleSendMessage} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex items-center gap-0 border-2 border-black focus-within:border-primary transition-colors">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="ENTER COMMAND..."
                        className="flex-1 bg-transparent outline-none text-base text-black placeholder-gray-400 p-4 font-mono"
                    />
                    <button
                        onClick={() => handleSendMessage(inputValue)}
                        disabled={!inputValue.trim()}
                        className={`p-4 transition-all ${inputValue.trim()
                            ? 'bg-black text-[#FF6B00] hover:bg-[#FF6B00] hover:text-black'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        <Send size={20} />
                    </button>
                </div>
                <div className="text-center mt-2">
                    <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                        Inker Robotics™ AI System v1.0
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
