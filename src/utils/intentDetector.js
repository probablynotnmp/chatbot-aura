// Simple regex-based intent detector
export const detectIntent = (message) => {
    const lowerMsg = message.toLowerCase();

    const patterns = {
        greeting: /\b(hi|hello|hey|greetings|morning|afternoon|evening)\b/,
        farewell: /\b(bye|goodbye|see you|later)\b/,
        attractions: /\b(attraction|exhibit|show|zone|arena|what to see|things to do)\b/,
        pricing: /\b(price|cost|ticket|fee|how much|pay)\b/,
        hours: /\b(open|close|time|hour|when)\b/,
        location: /\b(where|location|address|map|get there|reach)\b/,
        facilities: /\b(wifi|restroom|toilet|food|eat|restaurant|parking|locker|shop)\b/,
        safety: /\b(safe|rule|instruction|child|kid|touch)\b/,
        identity: /\b(who are you|what are you|your name)\b/,
        chitti: /\b(who is chitti|chitti)\b/,
        inker: /\b(inker|company|founder|developer|created)\b/,
        robopark_info: /\b(about robopark|what is robopark|verticals|academy|incubator)\b/
    };

    for (const [intent, regex] of Object.entries(patterns)) {
        if (regex.test(lowerMsg)) {
            return intent;
        }
    }

    // Check for specific attraction names
    if (lowerMsg.includes('humanoid') || lowerMsg.includes('robot zone')) return 'attraction_humanoid';
    if (lowerMsg.includes('ai') || lowerMsg.includes('lab')) return 'attraction_ai';
    if (lowerMsg.includes('drone')) return 'attraction_drone';
    if (lowerMsg.includes('combat') || lowerMsg.includes('fight')) return 'attraction_combat';
    if (lowerMsg.includes('nano')) return 'attraction_nano';
    if (lowerMsg.includes('assembly') || lowerMsg.includes('industrial')) return 'attraction_assembly';

    return 'unknown';
};
