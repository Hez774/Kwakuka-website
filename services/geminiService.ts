// src/geminiService.ts

import { GoogleAIClient } from "@google/genai";  // 1) change this line

const SYSTEM_INSTRUCTION = `...same as before...`;

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

let genAI: GoogleAIClient | null = null;

if (apiKey) {
  console.log("Gemini key detected");
  genAI = new GoogleAIClient({ apiKey });
} else {
  console.error("Gemini API key missing; AI features disabled.");
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!genAI) {
    return "I'm currently offline (AI Key missing). Please contact the administrator.";
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",   // or your chosen model
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
