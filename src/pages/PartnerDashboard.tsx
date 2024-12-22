import { useState } from 'react';
import { useAuth } from '../features/auth/hooks/useAuth';
import { mockContentItems, mockPartner } from '../shared/mockData';
import { Link } from 'react-router-dom';

export default function PartnerDashboard() {
  const { user } = useAuth();
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const partner = mockPartner;
  const contentItems = mockContentItems;

  const analytics = contentItems.map(item => item.analytics);
  const totalRevenue = analytics.reduce((sum, item) => sum + item.revenue, 0);
  const totalImpressions = analytics.reduce((sum, item) => sum + item.impressions, 0);
  const averageConversion = analytics.reduce((sum, item) => sum + item.conversionRate, 0) / analytics.length;

  return (
    <div className="space-y-6">
      {/* Partner Profile */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{partner.company}</h1>
            <p className="text-sm text-gray-500">{partner.email}</p>
            <div className="mt-2 flex items-center">
              <span className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {partner.reputation.toFixed(1)}
              </span>
              <span className="mx-2">•</span>
              <span className="text-sm text-gray-500">
                {partner.totalSales} продаж
              </span>
            </div>
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Редактировать профиль
          </button>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className="bg-white shadow-sm rounded-lg p-4">
        <div className="flex justify-end space-x-2">
          {(['7d', '30d', '90d'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                timeRange === range
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {range === '7d' ? '7 дней' : range === '30d' ? '30 дней' : '90 дней'}
            </button>
          ))}
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Общая статистика</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500">Общий доход</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">${totalRevenue.toFixed(2)}</p>
            <p className="mt-1 text-sm text-green-600">+12.3% с прошлого периода</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500">Показы</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">{totalImpressions}</p>
            <p className="mt-1 text-sm text-green-600">+5.7% с прошлого периода</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500">Конверсия</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">{(averageConversion * 100).toFixed(1)}%</p>
            <p className="mt-1 text-sm text-red-600">-2.1% с прошлого периода</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500">Активных материалов</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">{contentItems.length}</p>
            <p className="mt-1 text-sm text-gray-600">Всего материалов</p>
          </div>
        </div>
      </div>

      {/* Content Management */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">Ваши материалы</h2>
          <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Добавить материал
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Название
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Категория
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Цена
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Показы
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Конверсия
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Доход
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Рейтинг
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contentItems.map((item) => {
                const itemAnalytics = item.analytics;
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            Версия {item.version}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${item.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {itemAnalytics.impressions}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {(itemAnalytics.conversionRate * 100).toFixed(1)}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${itemAnalytics.revenue.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900">{item.rating.toFixed(1)}</span>
                        <svg className="w-4 h-4 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        to={`/content/${item.id}`}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Просмотр
                      </Link>
                      <button className="text-indigo-600 hover:text-indigo-900">
                        Редактировать
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popular Queries */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Популярные поисковые запросы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contentItems.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">{item.title}</h3>
              <div className="space-y-2">
                {item.analytics.recommendationContexts.map((context, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{context.query}</span>
                    <span className="text-sm font-medium text-gray-900">{context.frequency} запросов</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 