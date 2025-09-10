import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const handlePress = () => {
    Linking.openURL(article.url);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.description} numberOfLines={3}>
        {article.description}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.source}>{article.source}</Text>
        <Text style={styles.date}>
          {new Date(article.publishedAt).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  source: {
    fontSize: 12,
    color: '#4A90E2',
    fontWeight: '500',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});