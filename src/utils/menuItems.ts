import { 
  Search, Book, Settings, BarChart, 
  TrendingUp, Layers, Database, 
  DollarSign, Share2 
} from 'lucide-react';

export const getUserMenuItems = (userType: string) => {
  switch(userType) {
    case 'user':
      return [
        { icon: Search, label: 'Поиск', screen: 'search' },
        { icon: Book, label: 'Мои исследования', screen: 'my-research' },
        { icon: Settings, label: 'Настройки', screen: 'settings' }
      ];
    case 'owner':
      return [
        { icon: BarChart, label: 'Аналитика', screen: 'analytics' },
        { icon: TrendingUp, label: 'Монетизация', screen: 'monetization' },
        { icon: Layers, label: 'ML-модель', screen: 'ml-settings' }
      ];
    case 'partner':
      return [
        { icon: Database, label: 'Каталог данных', screen: 'data-catalog' },
        { icon: DollarSign, label: 'Финансы', screen: 'finances' },
        { icon: Share2, label: 'Интеграция', screen: 'integration' }
      ];
    default:
      return [];
  }
};