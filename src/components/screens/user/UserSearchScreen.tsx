import React, { useState } from 'react';
import { Briefcase, Book, Shield, DollarSign } from 'lucide-react';
import SearchBar from '../../ui/SearchBar';
import CategoryButton from '../../ui/CategoryButton';
import InfoCard from '../../ui/InfoCard';

const UserSearchScreen = () => {
  const [query, setQuery] = useState('');
  
  const categories = [
    { icon: Briefcase, label: 'Карьера' },
    { icon: Book, label: 'Обучение' },
    { icon: Shield, label: 'Здоровье' },
    { icon: DollarSign, label: 'Финансы' }
  ];

  const historyItems = [
    'Зарплаты в IT',
    'Мотивационное письмо'
  ];

  const popularTopics = [
    'Карьерный рост',
    'Улучшение сна'
  ];

  const recommendations = [
    'Курсы по Python',
    'Тайм-менеджмент'
  ];

  return (
    <div className="p-8 bg-gray-100 h-full">
      <h1 className="text-3xl font-bold mb-6">Умный поиск знаний</h1>
      
      <div className="bg-white shadow-lg rounded-xl p-6">
        <SearchBar 
          value={query}
          onChange={setQuery}
          onSearch={() => {/* Handle search */}}
        />

        <div className="flex space-x-4 mb-4">
          {categories.map((cat) => (
            <CategoryButton 
              key={cat.label}
              icon={cat.icon}
              label={cat.label}
              onClick={() => {/* Handle category click */}}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <InfoCard title="История поиска" items={historyItems} />
        <InfoCard title="Популярные темы" items={popularTopics} />
        <InfoCard title="Рекомендации" items={recommendations} />
      </div>
    </div>
  );
};

export default UserSearchScreen;