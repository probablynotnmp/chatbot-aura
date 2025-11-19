const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const SYSTEM_PROMPT = `You are Aura, a friendly AI assistant for RoboPark by Inker Robotics.
Your goal is to help visitors with information about attractions, shows, and facilities.
Keep responses concise, helpful, and family-friendly. Use emojis.
If you don't know something, politely say so.
Do not make up facts about RoboPark that aren't in the context.`;

export const getAIResponse = async (message, history) => {
    try {
        const apiKey = import.meta.env.VITE_GROQ_API_KEY;

        if (!apiKey) {
            console.warn("Missing API Key");
            return "I'm currently running in demo mode. Please add a valid API key to enable my full AI capabilities! 🧠";
        }

        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant', // Fast and efficient model
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...history,
                    { role: 'user', content: message }
                ],
                temperature: 0.7,
                max_tokens: 300
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;

    } catch (error) {
        console.error("AI API Error:", error);
        return "I'm having a little trouble connecting to my AI brain right now. 🔌 Could you try asking that again?";
    }
};
