export const isContentSafe = (message) => {
    const profanityList = ['badword', 'offensive', 'hate', 'stupid', 'idiot']; // Placeholder list
    const lowerMsg = message.toLowerCase();

    // Check for profanity
    if (profanityList.some(word => lowerMsg.includes(word))) {
        return { safe: false, reason: 'profanity' };
    }

    // Check for off-topic (very basic check, can be improved)
    // In a real app, this might be more sophisticated or handled by the AI

    return { safe: true };
};

export const getModerationResponse = (reason) => {
    if (reason === 'profanity') {
        return "I'm here to keep our conversation family-friendly! Let's focus on making your RoboPark visit amazing. How can I help you today? 😊";
    }
    return "I'm designed to help with RoboPark information. How can I assist you with your visit?";
};
