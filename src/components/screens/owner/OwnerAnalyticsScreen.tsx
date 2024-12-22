import React from 'react';
import { User, Search, Database, TrendingUp } from 'lucide-react';
import MetricCard from '../../ui/MetricCard';
import ProgressBar from '../../ui/ProgressBar';

const OwnerAnalyticsScreen = () => {
  const analyticsCards = [
    { 
      icon: User, 
      title: 'Пользователи', 
      value: '10,234',
      trend: '+12.4%'
    },
    { 
      icon: Search, 
      title: 'Запросы', 
      value: '45,678',
      trend: '+8.2%'
    },
    { 
      icon: Database, 
      title: 'Источники', 
      value: '124',
      trend: '+5.1%'
    }
  ];

  return (
    <div className="p-8 bg-gray-100 h-full">
      <h1 className="text-3xl font-bold mb-6">Аналитика платформы</h1>
      
      <div className="grid grid-cols-3 gap-6 mb-6">
        {analyticsCards.map((card) => (
          <MetricCard 
            key={card.title}
            icon={card.icon}
            title={card.title}
            value={card.value}
            trend={card.trend}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Популярные запросы</h3>
          <ul>
            <li className="mb-2 border-b pb-2">Зарплаты в IT</li>
            <li className="mb-2 border-b pb-2">Мотивационные письма</li>
            <li className="mb-2">Улучшение сна</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Качество ML-модели</h3>
          <ProgressBar label="Релевантность ответов" value={85} />
        </div>
      </div>
    </div>
  );
};

export default OwnerAnalyticsScreen;