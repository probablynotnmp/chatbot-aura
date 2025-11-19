import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import { MessageCircle, Bot } from 'lucide-react';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-3xl">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-[#FF6B00] flex items-center justify-center clip-path-polygon-[0%_0%,100%_0%,100%_100%,0%_100%] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Bot size={48} className="text-black" />
          </div>
        </div>
        <h1 className="text-6xl font-black text-black mb-6 tracking-tighter uppercase">
          Welcome to <span className="text-primary">RoboPark</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed font-mono max-w-2xl mx-auto">
          EXPERIENCE THE FUTURE OF ROBOTICS. EXPLORE ATTRACTIONS, WATCH DRONE SHOWS, AND INTERACT WITH ADVANCED AI.
        </p>

        <button
          onClick={() => setIsChatOpen(true)}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold text-lg border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all duration-300 shadow-[8px_8px_0px_0px_#FF6B00]"
        >
          <MessageCircle className="group-hover:rotate-12 transition-transform" />
          INITIATE AURA CHAT
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-gray-400 text-xs font-mono uppercase tracking-widest">
        © 2024 Inker Robotics™. All rights reserved.
      </div>

      {/* Chatbot Widget */}
      <div className="fixed bottom-0 right-0 z-50 w-full h-full pointer-events-none">
        <div className="pointer-events-auto">
          <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
      </div>

    </div>
  );
}

export default App;
