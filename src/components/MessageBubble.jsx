import React from 'react';
import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const MessageBubble = ({ message }) => {
    const isBot = message.sender === 'bot';

    return (
        <div className={`flex w-full ${isBot ? 'justify-start' : 'justify-end'} mb-4 animate-fade-in`}>
            <div className={`flex max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'} items-start gap-2`}>

                {/* Avatar */}
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border border-black ${isBot ? 'bg-black text-[#FF6B00]' : 'bg-[#FF6B00] text-black'
                    }`}>
                    {isBot ? <Bot size={18} color="#FF6B00" /> : <User size={18} />}
                </div>

                {/* Message Content */}
                <div className={`p-4 text-sm shadow-sm border border-black ${isBot
                    ? 'bg-white text-black'
                    : 'bg-primary text-black'
                    }`}>
                    {/* Markdown rendering for bot messages */}
                    <div className="prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0 font-mono prose-strong:text-primary prose-strong:font-black">
                        <ReactMarkdown>{message.text}</ReactMarkdown>
                    </div>
                    <span className={`text-[10px] mt-2 block text-right font-mono ${isBot ? 'text-gray-400' : 'text-black/60'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MessageBubble;
