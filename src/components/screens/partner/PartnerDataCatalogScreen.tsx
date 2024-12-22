import React from 'react';
import { Globe, Briefcase, Book } from 'lucide-react';

const PartnerDataCatalogScreen = () => {
  const datasetCategories = [
    { name: 'Недвижимость', count: 2, icon: Globe },
    { name: 'IT-зарплаты', count: 4, icon: Briefcase },
    { name: 'Образование', count: 10, icon: Book }
  ];

  const datasets = [
    {
      title: 'Зарплаты в IT',
      usage: 1245,
      revenue: '$6,230',
    },
    {
      title: 'Рынок недвижимости',
      usage: 876,
      revenue: '$4,120',
    },
    {
      title: 'Образование в России',
      usage: 500,
      revenue: '$2,500',
    }
  ];

  return (
    <div className="p-8 bg-gray-100 h-full">
      <h1 className="text-3xl font-bold mb-6">Каталог данных</h1>
      
      <div className="grid grid-cols-3 gap-6 mb-6">
        {datasetCategories.map((category) => (
          <div key={category.name} className="bg-white rounded-xl shadow-md p-6 flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <category.icon className="text-green-600" />
            </div>
            <div>
              <p className="text-gray-500">{category.name}</p>
              <p className="text-2xl font-bold">{category.count} наборов</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-semibold mb-4">Доступные наборы данных</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Название</th>
              <th className="p-3">Использование</th>
              <th className="p-3">Доход</th>
              <th className="p-3">Действия</th>
            </tr>
          </thead>
          <tbody>
            {datasets.map((dataset, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{dataset.title}</td>
                <td className="p-3 text-center">{dataset.usage}</td>
                <td className="p-3 text-center">{dataset.revenue}</td>
                <td className="p-3 text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Подробнее
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnerDataCatalogScreen;