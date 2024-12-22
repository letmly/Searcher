import { ContentItem, Review, SearchResult } from './types/content.types';
import { User, Partner, UserAnalytics } from './types/user.types';

// Mock user data
export const mockUser: User = {
  id: '1',
  email: 'user@example.com',
  role: 'user',
  name: 'John Doe',
  createdAt: new Date('2023-01-01'),
  subscription: {
    status: 'trial',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-01-08'),
  },
};

export const mockPartner: Partner = {
  id: '2',
  email: 'partner@example.com',
  role: 'partner',
  name: 'Expert Solutions Inc.',
  createdAt: new Date('2023-01-01'),
  company: 'Expert Solutions',
  reputation: 4.8,
  totalEarnings: 15000,
  totalSales: 120,
  contentItems: ['1', '2', '3'],
};

// Mock content data
export const mockContentItems: ContentItem[] = [
  {
    id: '1',
    partnerId: '2',
    title: 'Полное руководство по машинному обучению',
    description: 'Подробный курс по ML, включающий теорию и практику',
    category: 'Машинное обучение',
    price: 99.99,
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2023-12-15'),
    version: '2.0',
    rating: 4.7,
    reviews: [],
    analytics: {
      contentId: '1',
      impressions: 1200,
      purchases: 85,
      revenue: 8499.15,
      conversionRate: 0.071,
      averageRating: 4.7,
      recommendationContexts: [
        { query: 'машинное обучение начало', frequency: 45 },
        { query: 'ML курс', frequency: 30 },
      ],
      performanceByDay: [],
    },
  },
  {
    id: '2',
    partnerId: '2',
    title: 'Бизнес-аналитика для стартапов',
    description: 'Как принимать решения на основе данных',
    category: 'Бизнес',
    price: 79.99,
    createdAt: new Date('2023-07-01'),
    updatedAt: new Date('2023-12-10'),
    version: '1.5',
    rating: 4.5,
    reviews: [],
    analytics: {
      contentId: '2',
      impressions: 800,
      purchases: 60,
      revenue: 4799.40,
      conversionRate: 0.075,
      averageRating: 4.5,
      recommendationContexts: [
        { query: 'аналитика для бизнеса', frequency: 35 },
        { query: 'стартап метрики', frequency: 25 },
      ],
      performanceByDay: [],
    },
  },
];

// Mock search results
export const mockSearchResults: SearchResult[] = [
  {
    contentId: '1',
    relevanceScore: 0.95,
    title: 'Полное руководство по машинному обучению',
    description: 'Подробный курс по ML, включающий теорию и практику',
    price: 99.99,
    partnerRating: 4.8,
    category: 'Машинное обучение',
  },
  {
    contentId: '2',
    relevanceScore: 0.88,
    title: 'Бизнес-аналитика для стартапов',
    description: 'Как принимать решения на основе данных',
    price: 79.99,
    partnerRating: 4.8,
    category: 'Бизнес',
  },
  {
    contentId: '3',
    relevanceScore: 0.75,
    title: 'Data Science на практике',
    description: 'Реальные кейсы и решения',
    price: 89.99,
    partnerRating: 4.6,
    category: 'Data Science',
  },
];

// Mock platform metrics
export const mockPlatformMetrics = {
  totalUsers: 1250,
  activeUsers: 850,
  trialUsers: 180,
  conversionRate: 0.65,
  totalRevenue: 45000,
  popularCategories: [
    {
      category: 'Машинное обучение',
      searches: 450,
      purchases: 85,
    },
    {
      category: 'Бизнес',
      searches: 380,
      purchases: 60,
    },
    {
      category: 'Data Science',
      searches: 320,
      purchases: 45,
    },
  ],
};

// Mock partner metrics
export const mockPartnerMetrics = [
  {
    partnerId: '2',
    name: 'Expert Solutions Inc.',
    reputation: 4.8,
    totalRevenue: 15000,
    contentCount: 5,
    averageConversion: 0.073,
  },
  {
    partnerId: '3',
    name: 'Data Masters Academy',
    reputation: 4.6,
    totalRevenue: 12000,
    contentCount: 4,
    averageConversion: 0.068,
  },
]; 