export interface ContentItem {
  id: string;
  partnerId: string;
  title: string;
  description: string;
  category: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  version: string;
  rating: number;
  reviews: Review[];
  analytics: ContentAnalytics;
}

export interface Review {
  id: string;
  userId: string;
  contentId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface ContentAnalytics {
  contentId: string;
  impressions: number;
  purchases: number;
  revenue: number;
  conversionRate: number;
  averageRating: number;
  recommendationContexts: Array<{
    query: string;
    frequency: number;
  }>;
  performanceByDay: Array<{
    date: Date;
    purchases: number;
    revenue: number;
    reviews: Review[];
    version: string;
  }>;
}

export interface SearchResult {
  contentId: string;
  relevanceScore: number;
  title: string;
  description: string;
  price: number;
  partnerRating: number;
  category: string;
} 