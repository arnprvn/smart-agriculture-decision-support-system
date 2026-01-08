
export interface SoilData {
  nitrogen: number;
  ph: number;
  moisture: number;
  crop?: string;
  timestamp?: string;
  phosphorus?: number;
  potassium?: number;
}

export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  location?: string;
  rainfall?: number;
}

export interface DetailedRecommendation {
  title: string;
  description: string;
  urgency: 'low' | 'medium' | 'high';
}

// Added Recommendation interface for structured advice
export interface Recommendation {
  category: 'irrigation' | 'fertilizer' | 'risk' | 'yield';
  title: string;
  description: string;
  urgency: 'low' | 'medium' | 'high';
}

export interface AnalysisResult {
  status: { text: string; type: 'success' | 'warning' | 'error' }[];
  deficiencies: DetailedRecommendation[];
  fertilizers: string[];
  pestManagement: string[];
  // Properties required by Dashboard and Advisor components
  predictedYield: string;
  suitabilityScore: number;
  recommendations: Recommendation[];
  riskAnalysis: string;
}

export enum AppTab {
  INPUT = 'input',
  DATA = 'data',
  TIPS = 'tips',
  WEATHER = 'weather',
  REPORT = 'report'
}

export type Language = 
  | 'en' | 'ta' | 'as' | 'bn' | 'brx' | 'doi' | 'gu' | 'hi' 
  | 'kn' | 'ks' | 'kok' | 'mai' | 'ml' | 'mni' | 'mr' | 'ne' 
  | 'or' | 'pa' | 'sa' | 'sat' | 'sd' | 'te' | 'ur';
