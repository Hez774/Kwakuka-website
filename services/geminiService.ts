import { GoogleGenerativeAI } from "@google/genai";

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

// Read API key from Vite env
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

let genAI: GoogleGenerativeAI | null = null;

if (apiKey) {
  genAI = new GoogleGenerativeAI(apiKey);
} else {
  console.error("Gemini API key missing; AI features disabled.");
}

// Optional helper, if you want it elsewhere
export function getGeminiClient() {
  return genAI;
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  // If no key / client, fail gracefully without crashing the app
  if (!genAI) {
    return "I'm currently offline (AI Key missing). Please contact the administrator.";
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", // or your preferred model name
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const result = await model.generateContent(message);
    const response = await result.response;

    const text = response.text();
    return text || "I'm sorry, I couldn't process that right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the hope network right now. Please try again later.";
  }
};
