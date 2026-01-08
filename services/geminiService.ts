
import { GoogleGenAI, Type } from "@google/genai";
import { SoilData, AnalysisResult } from "../types";

export const getAgriculturalInsights = async (
  data: SoilData,
  location: string,
  languageName: string = "English"
): Promise<AnalysisResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `Analyze agricultural context for ${data.crop} in ${location}: 
  Soil: Nitrogen: ${data.nitrogen} ppm, pH: ${data.ph}, Moisture: ${data.moisture}%, Phosphorus: ${data.phosphorus || 'N/A'} mg/kg, Potassium: ${data.potassium || 'N/A'} mg/kg.
  
  IMPORTANT: Provide all text descriptions, titles, and advice in the ${languageName} language.
  
  Provide a detailed analysis in JSON format including:
  1. status: list of summary status points with text and type ('success', 'warning', 'error').
  2. deficiencies: detailed deficiency cards (title, description, urgency).
  3. fertilizers: recommended specific fertilizers.
  4. pestManagement: pest management suggestions.
  5. predictedYield: estimated yield (string, e.g. "1.5 tons/acre").
  6. suitabilityScore: 0-100 score for current conditions.
  7. recommendations: categorized guidance (categories: irrigation, fertilizer, risk, yield).
  8. riskAnalysis: a textual analysis of potential risks.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          status: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                text: { type: Type.STRING },
                type: { type: Type.STRING, enum: ['success', 'warning', 'error'] }
              },
              required: ['text', 'type']
            }
          },
          deficiencies: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                urgency: { type: Type.STRING, enum: ['low', 'medium', 'high'] }
              },
              required: ['title', 'description', 'urgency']
            }
          },
          fertilizers: { type: Type.ARRAY, items: { type: Type.STRING } },
          pestManagement: { type: Type.ARRAY, items: { type: Type.STRING } },
          predictedYield: { type: Type.STRING },
          suitabilityScore: { type: Type.NUMBER },
          recommendations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                category: { type: Type.STRING, enum: ['irrigation', 'fertilizer', 'risk', 'yield'] },
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                urgency: { type: Type.STRING, enum: ['low', 'medium', 'high'] }
              },
              required: ['category', 'title', 'description', 'urgency']
            }
          },
          riskAnalysis: { type: Type.STRING }
        },
        required: [
          'status', 'deficiencies', 'fertilizers', 'pestManagement', 
          'predictedYield', 'suitabilityScore', 'recommendations', 'riskAnalysis'
        ]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response text from AI");
  return JSON.parse(text.trim());
};

export const translateUIStrings = async (
  baseStrings: Record<string, string>,
  targetLanguage: string
): Promise<Record<string, string>> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Translate the following UI labels from English to ${targetLanguage}. 
  Maintain the exact same JSON keys.
  JSON to translate: ${JSON.stringify(baseStrings)}`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
    }
  });

  const text = response.text;
  if (!text) throw new Error("Translation failed");
  return JSON.parse(text.trim());
};
