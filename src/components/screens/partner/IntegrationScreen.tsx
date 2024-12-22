import React from 'react';
import { Share2, Code, Key, Shield } from 'lucide-react';

const IntegrationScreen = () => {
  const apiKey = 'sk_test_51NcLZvKj8mXS7...';
  
  const endpoints = [
    {
      name: 'Поиск данных',
      method: 'GET',
      path: '/api/v1/search',
      status: 'active'
    },
    {
      name: 'Анализ данных',
      method: 'POST',
      path: '/api/v1/analyze',
      status: 'active'
    },
    {
      name: 'Экспорт результатов',
      method: 'GET',
      path: '/api/v1/export',
      status: 'active'
    }
  ];

  return (
    <div className="p-8 bg-gray-100 h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Интеграция</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Документация API
        </button>
      </div>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Key className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold">API Ключ</h2>
          </div>
          
          <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
            <code className="flex-grow font-mono text-sm">
              {apiKey.slice(0, 10)}...
            </code>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Показать
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
              Обновить
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold">Доступные эндпоинты</h2>
          </div>

          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{endpoint.name}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                    {endpoint.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                    {endpoint.method}
                  </span>
                  <code className="font-mono text-sm">{endpoint.path}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Безопасность</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">HTTPS шифрование</p>
                  <p className="text-sm text-gray-600">TLS 1.3</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                  Активно
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">Rate Limiting</p>
                  <p className="text-sm text-gray-600">1000 запросов/мин</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                  Активно
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">IP Whitelist</p>
                  <p className="text-sm text-gray-600">3 IP адреса</p>
                </div>
                <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Настроить
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Share2 className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Пример интеграции</h2>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-sm text-gray-300 font-mono">
{`fetch('https://api.intellisearch.com/v1/search', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + API_KEY,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}
              </pre>
            </div>

            <div className="mt-4">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Копировать код
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationScreen;