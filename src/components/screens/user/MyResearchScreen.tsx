import React from 'react';
import { Book, Clock, Star, Archive } from 'lucide-react';

const MyResearchScreen = () => {
  const researchItems = [
    {
      title: 'Карьерный рост в IT',
      date: '12 марта 2024',
      category: 'Карьера',
      saved: true
    },
    {
      title: 'Эффективное обучение',
      date: '10 марта 2024',
      category: 'Образование',
      saved: true
    },
    {
      title: 'Управление финансами',
      date: '8 марта 2024',
      category: 'Финансы',
      saved: false
    }
  ];

  return (
    <div className="p-8 bg-gray-100 h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Мои исследования</h1>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Star className="w-4 h-4 mr-2" />
            Избранное
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
            <Archive className="w-4 h-4 mr-2" />
            Архив
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {researchItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="flex items-center text-gray-600 space-x-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.date}
                  </span>
                  <span className="flex items-center">
                    <Book className="w-4 h-4 mr-1" />
                    {item.category}
                  </span>
                </div>
              </div>
              <button className={`p-2 rounded-full ${item.saved ? 'text-yellow-500' : 'text-gray-400'}`}>
                <Star className="w-5 h-5" fill={item.saved ? 'currentColor' : 'none'} />
              </button>
            </div>
            <div className="mt-4 flex space-x-3">
              <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                Продолжить
              </button>
              <button className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100">
                Поделиться
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyResearchScreen;