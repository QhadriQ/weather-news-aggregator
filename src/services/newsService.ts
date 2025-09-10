import { NewsArticle, WeatherCondition } from '../types';

const API_KEY = 'fe6ec8914ca040f48f03e0c994c5e549';
const BASE_URL = 'https://newsapi.org/v2';

const weatherKeywords = {
  cold: ['depression', 'sad', 'tragedy', 'crisis', 'problem'],
  hot: ['fear', 'danger', 'threat', 'warning', 'risk'],
  cool: ['win', 'success', 'happy', 'celebration', 'achievement']
};

export const fetchNews = async (categories: string[]): Promise<NewsArticle[]> => {
  const category = categories.length > 0 ? categories[0] : 'general';
  const response = await fetch(
    `${BASE_URL}/top-headlines?category=${category}&apiKey=${API_KEY}&pageSize=50`
  );
  const data = await response.json();

  return data.articles.map((article: any) => ({
    title: article.title,
    description: article.description || '',
    url: article.url,
    publishedAt: article.publishedAt,
    source: article.source.name,
  }));
};

export const filterNewsByWeather = (news: NewsArticle[], condition: WeatherCondition): NewsArticle[] => {
  const keywords = weatherKeywords[condition];
  return news.filter(article => 
    keywords.some(keyword => 
      article.title.toLowerCase().includes(keyword) || 
      article.description.toLowerCase().includes(keyword)
    )
  ).slice(0, 10);
};