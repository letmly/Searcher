export type UserRole = 'user' | 'partner' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  createdAt: Date;
  subscription?: {
    status: 'trial' | 'active' | 'expired';
    startDate: Date;
    endDate: Date;
  };
}

export interface Partner extends User {
  role: 'partner';
  company?: string;
  reputation: number;
  totalEarnings: number;
  totalSales: number;
  contentItems: string[]; // IDs of content items
}

export interface UserAnalytics {
  userId: string;
  searchHistory: Array<{
    query: string;
    timestamp: Date;
    category: string;
  }>;
  purchaseHistory: Array<{
    contentId: string;
    timestamp: Date;
    price: number;
  }>;
  interests: Array<{
    category: string;
    weight: number;
  }>;
} 