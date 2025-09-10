# API Keys Setup Instructions

## Required API Keys

### 1. OpenWeatherMap API Key
- **Website**: https://openweathermap.org/api
- **Steps**:
  1. Create free account
  2. Go to API Keys section
  3. Copy your API key
  4. Replace `YOUR_OPENWEATHER_API_KEY` in `src/services/weatherService.ts` line 3

### 2. News API Key  
- **Website**: https://newsapi.org/
- **Steps**:
  1. Create free account
  2. Go to API Keys section
  3. Copy your API key
  4. Replace `YOUR_NEWS_API_KEY` in `src/services/newsService.ts` line 3

## Update Files

**File 1: `src/services/weatherService.ts`**
```typescript
const API_KEY = 'your_actual_openweather_key_here';
```

**File 2: `src/services/newsService.ts`**
```typescript
const API_KEY = 'your_actual_news_api_key_here';
```

## Free Tier Limits
- **OpenWeatherMap**: 1,000 calls/day
- **News API**: 100 requests/day

Both are sufficient for development and testing!