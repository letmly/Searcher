import React from 'react';
import { DollarSign, TrendingUp, Users, Package } from 'lucide-react';

const MonetizationScreen = () => {
  const metrics = [
    {
      icon: DollarSign,
      title: 'Доход',
      value: '$24,500',
      trend: '+15.3%'
    },
    {
      icon: Users,
      title: 'Платящие пользователи',
      value: '1,234',
      trend: '+8.7%'
    },
    {
      icon: Package,
      title: 'Активные подписки',
      value: '890',
      trend: '+12.4%'
    }
  ];

  const subscriptionPlans = [
    {
      name: 'Базовый',
      price: '$9.99',
      users: 245,
      revenue: '$2,447.55'
    },
    {
      name: 'Профессиональный',
      price: '$19.99',
      users: 567,
      revenue: '$11,334.33'
    },
    {
      name: 'Корпоративный',
      price: '$49.99',
      users: 78,
      revenue: '$3,899.22'
    }
  ];

  return (
    <div className="p-8 bg-gray-100 h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Монетизация</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Настроить цены
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <metric.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-green-600 text-sm">▲ {metric.trend}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Подписки</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-3">План</th>
                <th className="pb-3">Цена</th>
                <th className="pb-3">Пользователи</th>
                <th className="pb-3">Доход</th>
              </tr>
            </thead>
            <tbody>
              {subscriptionPlans.map((plan, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3">{plan.name}</td>
                  <td className="py-3">{plan.price}</td>
                  <td className="py-3">{plan.users}</td>
                  <td className="py-3">{plan.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Доход по источникам</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Подписки</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>API доступ</span>
                <span>15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '15%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Партнерская программа</span>
                <span>10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '10%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizationScreen;