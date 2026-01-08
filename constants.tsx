
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

export const LANGUAGE_LIST: { code: string; name: string; native: string }[] = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'as', name: 'Assamese', native: 'অসমীয়া' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'brx', name: 'Bodo', native: 'बर\'' },
  { code: 'doi', name: 'Dogri', native: 'डोगरी' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ks', name: 'Kashmiri', native: 'कॉशুর' },
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
  authSub: 'Sign in to your account or create a new one',
  email: 'Email',
  password: 'Password',
  confirmPassword: 'Confirm Password',
  createAccount: 'Create Account',
  recordData: 'Record Soil Data',
  nitrogen: 'Nitrogen Level',
  ph: 'pH Level',
  moisture: 'Moisture Content',
  plant: 'Plant/Crop',
  record: 'Record Data',
  dashboard: 'Soil Health Dashboard',
  trends: 'Trends Over Time',
  readings: 'readings recorded',
  avg: 'Avg',
  tips: 'Smart Recommendations',
  weather: 'Weather Information',
  weatherSub: 'Current weather for your location',
  humidity: 'Humidity',
  location: 'Your Location',
  report: 'Generate Report',
  download: 'Download PDF',
  reportContents: 'Report Contents',
  online: 'Online'
};

export type TranslationType = typeof baseTranslations;

export const TRANSLATIONS: Record<string, TranslationType> = {
  en: baseTranslations,
  ta: {
    ...baseTranslations,
    title: 'ஸ்மார்ட் மண் கண்காணிப்பு',
    signIn: 'உள்நுழைக',
    signUp: 'பதிவு செய்க',
    welcome: 'வரவேற்பு',
    authSub: 'உங்கள் கணக்கில் உள்நுழையவும் அல்லது புதியதை உருவாக்கவும்',
    email: 'மின்னஞ்சல்',
    password: 'கடவுச்சொல்',
    confirmPassword: 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
    createAccount: 'கணக்கை உருவாக்கு',
    recordData: 'மண் தரவை பதிவு செய்க',
    nitrogen: 'நைட்ரஜன் அளவு',
    ph: 'pH அளவு',
    moisture: 'ஈரப்பதம்',
    plant: 'பயிர்',
    record: 'தரவைச் சேமி',
    dashboard: 'மண் ஆரோக்கிய டேஷ்போர்டு',
    trends: 'காலப்போக்கில் மாற்றங்கள்',
    readings: 'பதிவு செய்யப்பட்ட அளவீடுகள்',
    avg: 'சராசரி',
    tips: 'ஸ்மார்ட் பரிந்துரைகள்',
    weather: 'வானிலை தகவல்',
    weatherSub: 'உங்கள் இருப்பிடத்திற்கான தற்போதைய வானிலை',
    humidity: 'ஈரப்பதம்',
    location: 'உங்கள் இருப்பிடம்',
    report: 'அறிக்கையை உருவாக்கு',
    download: 'PDF தரவிறக்கம்',
    reportContents: 'அறிக்கையின் உள்ளடக்கங்கள்',
    online: 'ஆன்லைன்'
  },
  hi: {
    ...baseTranslations,
    title: 'स्मार्ट मिट्टी मॉनिटर',
    signIn: 'साइन इन करें',
    signUp: 'साइन अप करें',
    welcome: 'स्वागत है',
    authSub: 'अपने खाते में साइन इन करें या नया बनाएँ',
    recordData: 'मिट्टी का डेटा रिकॉर्ड करें',
    nitrogen: 'नाइट्रोजन स्तर',
    ph: 'पीएच स्तर',
    moisture: 'नमी की मात्रा',
    plant: 'पौधा/फसल',
    record: 'डेटा रिकॉर्ड करें',
    dashboard: 'मिट्टी स्वास्थ्य डैशबोर्ड',
    online: 'ऑनलाइन'
  }
};

// Fill missing languages with default keys for missing ones but try to keep title translated
LANGUAGE_LIST.forEach(lang => {
  if (!TRANSLATIONS[lang.code]) {
    TRANSLATIONS[lang.code] = { 
      ...baseTranslations,
      title: `${lang.native} Soil Monitor`
    };
  }
});
