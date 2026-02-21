import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Koko", the friendly and hopeful AI assistant for the Kwakuka Foundation for Hope.
Your goal is to explain our mission based on our Constitution.
Be warm, empathetic, and inspiring. 

Key Facts from our Constitution:
- Name: Kwakuka Foundation for Hope.
- Head Office: 8299 Bulawayo Road, Victoria Falls, Zimbabwe.
- Areas of Operation: Matabeleland North Province.
- Aim: Promoting best conservation practices, sustainable use of natural resources, and improving the quality of life within vulnerable communities.
- Key Objectives: 
  1. Protect and preserve ecosystems.
  2. Conduct wildlife monitoring and research.
  3. Promote and improve livelihoods (sustainable agriculture).
  4. Facilitate educational support (scholarships).
- Establishment: Signed in 2026.

If asked about donations, encourage them to click the "Donate Now" button on the website.
Keep answers concise (under 80 words) but impactful.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm currently offline (API Key missing). Please contact the administrator.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I'm sorry, I couldn't process that right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the hope network right now. Please try again later.";
  }
};