import { knowledgeBase } from '../data/knowledgeBase';

export const generateResponse = (intent) => {
    switch (intent) {
        case 'greeting':
            return "Hello! I'm Aura, your RoboPark guide. 🤖 How can I help you today? I can tell you about attractions, show times, or ticket prices!";

        case 'farewell':
            return "Goodbye! Hope to see you at RoboPark soon! ✨";

        case 'identity':
            return "I'm Aura, a friendly AI assistant created by Inker Robotics to help visitors at RoboPark! 🤖";

        case 'chitti':
            return "beep-boop I am Chitti, speed 1 terahertz, memory 1 zettabyte 🤖⚡";

        case 'inker':
            return `**${knowledgeBase.entities.inker_robotics.name}**
${knowledgeBase.entities.inker_robotics.description}

📍 ${knowledgeBase.entities.inker_robotics.location}
📞 ${knowledgeBase.entities.inker_robotics.contact}
🚀 Mission: ${knowledgeBase.entities.inker_robotics.mission}`;

        case 'robopark_info':
            return `**${knowledgeBase.entities.robopark.name}**
${knowledgeBase.entities.robopark.description}

**Core Verticals:**
${knowledgeBase.entities.robopark.verticals.map(v => `• ${v}`).join('\n')}

Developed by: ${knowledgeBase.entities.robopark.developed_by}`;

        case 'hours':
            return `We are open:
• Weekdays: ${knowledgeBase.hours.weekdays}
• Weekends: ${knowledgeBase.hours.weekends}
• Holidays: ${knowledgeBase.hours.holidays}
We are open 365 days a year!`;

        case 'pricing':
            return `Here are our ticket prices:
• Adult: ₹${knowledgeBase.pricing.adult}
• Child (3-12): ₹${knowledgeBase.pricing.child}
• Senior (65+): ₹${knowledgeBase.pricing.senior}
• Family Pack (2+2): ₹${knowledgeBase.pricing.family}
• Annual Pass: ₹${knowledgeBase.pricing.annual}

Online bookings get a 10% discount!`;

        case 'attractions':
            return `We have amazing attractions!
1. Humanoid Robot Zone 🤖
2. AI Innovation Lab 🧠
3. Drone Flight Arena 🚁
4. Robot Combat Arena ⚔️
5. Nano Robotics Exhibition 🔬
6. Robotic Assembly Line 🏭

Which one would you like to know more about?`;

        case 'attraction_humanoid':
            return getAttractionDetails('humanoid');
        case 'attraction_ai':
            return getAttractionDetails('ai_lab');
        case 'attraction_drone':
            return getAttractionDetails('drone');
        case 'attraction_combat':
            return getAttractionDetails('combat');
        case 'attraction_nano':
            return getAttractionDetails('nano');
        case 'attraction_assembly':
            return getAttractionDetails('assembly');

        default:
            return null; // Return null to trigger AI fallback
    }
};

const getAttractionDetails = (id) => {
    const attraction = knowledgeBase.attractions.find(a => a.id === id);
    if (!attraction) return null;

    return `**${attraction.name}** (${attraction.location})
• Duration: ${attraction.duration}
• Age: ${attraction.age}

${attraction.description}

Would you like to know the schedule for this?`;
};
