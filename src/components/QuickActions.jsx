import React from 'react';
import { Ticket, Clock, MapPin, Zap, Shield } from 'lucide-react';

const QuickActions = ({ onAction }) => {
    const actions = [
        { label: 'Ticket Prices', icon: Ticket, query: 'What are the ticket prices?' },
        { label: 'Opening Hours', icon: Clock, query: 'When are you open?' },
        { label: 'Attractions', icon: Zap, query: 'What attractions do you have?' },
        { label: 'Location', icon: MapPin, query: 'Where is RoboPark located?' },
        { label: 'Safety', icon: Shield, query: 'Safety guidelines' },
    ];

    return (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {actions.map((action, index) => (
                <button
                    key={index}
                    onClick={() => onAction(action.query)}
                    className="flex items-center gap-2 px-4 py-3 bg-white border border-black text-xs font-bold text-black hover:bg-[#FF6B00] hover:text-black hover:border-black transition-colors whitespace-nowrap uppercase tracking-wider"
                >
                    <action.icon size={14} />
                    {action.label}
                </button>
            ))}
        </div>
    );
};

export default QuickActions;
