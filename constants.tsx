
export const COLORS = {
  navy: '#0F172A',
  primary: '#1E293B',
  accent: '#3B82F6',
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
  bg: '#F8FAFC',
  info: '#3B82F6'
};

export const CROP_TYPES = ['Cotton', 'Rice', 'Wheat', 'Maize', 'Sugarcane', 'Pulse'];

export const MOCK_CHART_DATA = [
  { name: 'Jan', yield: 400 },
  { name: 'Feb', yield: 300 },
  { name: 'Mar', yield: 200 },
  { name: 'Apr', yield: 278 },
  { name: 'May', yield: 189 },
  { name: 'Jun', yield: 239 },
  { name: 'Jul', yield: 349 },
];

export const LANGUAGE_LIST: { code: any; name: string; native: string }[] = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'as', name: 'Assamese', native: 'অসমীয়া' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'brx', name: 'Bodo', native: 'बर\'' },
  { code: 'doi', name: 'Dogri', native: 'डोगरी' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ks', name: 'Kashmiri', native: 'कॉशुर' },
  { code: 'kok', name: 'Konkani', native: 'कोंकणी' },
  { code: 'mai', name: 'Maithili', native: 'मैथिली' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'mni', name: 'Manipuri', native: 'মৈতেইলোন' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'ne', name: 'Nepali', native: 'नेपाली' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  { code: 'sa', name: 'Sanskrit', native: 'संस्कृतम्' },
  { code: 'sat', name: 'Santali', native: 'संताली' },
  { code: 'sd', name: 'Sindhi', native: 'سنڌي' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'ur', name: 'Urdu', native: 'اردو' },
];

const baseTranslations = {
  title: 'Smart Soil Monitor',
  signIn: 'Sign In',
  signUp: 'Sign Up',
  welcome: 'Welcome',
  recordData: 'Record Soil Data',
  nitrogen: 'Nitrogen Level',
  ph: 'pH Level',
  moisture: 'Moisture Content',
  plant: 'Plant/Crop',
  record: 'Record Data'
};

export const TRANSLATIONS: Record<string, typeof baseTranslations> = {
  en: baseTranslations,
  ta: {
    title: 'ஸ்மார்ட் மண் கண்காணிப்பு',
    signIn: 'உள்நுழைக',
    signUp: 'பதிவு செய்க',
    welcome: 'வரவேற்பு',
    recordData: 'மண் தரவை பதிவு செய்க',
    nitrogen: 'நைட்ரஜன் அளவு',
    ph: 'pH அளவு',
    moisture: 'ஈரப்பதம்',
    plant: 'பயிர்',
    record: 'தரவைச் சேமி'
  },
  // Initializing other languages with base or English keys as placeholders
  // In a real production app, these would be fully translated.
  as: { ...baseTranslations, title: 'স্মাৰ্ট মাটি নিৰীক্ষক', recordData: 'মাটিৰ তথ্য সংগ্ৰহ' },
  bn: { ...baseTranslations, title: 'স্মার্ট মৃত্তিকা মনিটর', recordData: 'মাটির তথ্য রেকর্ড করুন' },
  hi: { ...baseTranslations, title: 'स्मार्ट मिट्टी मॉनिटर', recordData: 'मिट्टी का डेटा रिकॉर्ड करें' },
  te: { ...baseTranslations, title: 'స్మార్ట్ సాయిల్ మానిటర్', recordData: 'నేల డేటాను రికార్డ్ చేయండి' },
  kn: { ...baseTranslations, title: 'ಸ್ಮಾರ್ಟ್ ಮಣ್ಣಿನ ಮಾನಿಟರ್', recordData: 'ಮಣ್ಣಿನ ಡೇಟಾವನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ' },
  ml: { ...baseTranslations, title: 'സ്മാർട്ട് സോയിൽ മോണിറ്റർ', recordData: 'മണ്ണിന്റെ ഡാറ്റ രേഖപ്പെടുത്തുക' },
  gu: { ...baseTranslations, title: 'સ્માર્ટ સોઈલ મોનિટર', recordData: 'જમીનનો ડેટા રેકોર્ડ કરો' },
  mr: { ...baseTranslations, title: 'स्मार्ट मृदा मॉनिटर', recordData: 'मातीचा डेटा रेकॉर्ड करा' },
  pa: { ...baseTranslations, title: 'ਸਮਾਰਟ ਮਿੱਟੀ ਮਾਨੀਟਰ', recordData: 'ਮਿੱਟੀ ਦਾ ਡੇਟਾ ਰਿਕਾਰਡ ਕਰੋ' },
  ur: { ...baseTranslations, title: 'سمارٹ مٹی مانیٹر', recordData: 'مٹی کا ڈیٹا ریکارڈ کریں' }
};

// Fill missing languages with default keys
LANGUAGE_LIST.forEach(lang => {
  if (!TRANSLATIONS[lang.code]) {
    TRANSLATIONS[lang.code] = { ...baseTranslations };
  }
});
