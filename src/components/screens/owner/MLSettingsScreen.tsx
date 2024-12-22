import React, { useState } from 'react';
import { Layers, Settings, Zap, Database, AlertTriangle } from 'lucide-react';

const MLSettingsScreen = () => {
  const [autoTrain, setAutoTrain] = useState(true);
  const [threshold, setThreshold] = useState(0.85);

  const modelMetrics = {
    accuracy: 0.92,
    precision: 0.89,
    recall: 0.87,
    f1Score: 0.88
  };

  const recentUpdates = [
    {
      date: '15 марта 2024',
      description: 'Обновление модели: улучшена точность на 2.3%',
      status: 'success'
    },
    {
      date: '10 марта 2024',
      description: 'Добавлены новые параметры обучения',
      status: 'success'
    },
    {
      date: '5 марта 2024',
      description: 'Исправлена ошибка в обработке длинных запросов',
      status: 'warning'
    }
  ];

  return (
    <div className="p-8 bg-gray-100 h-full">
      <h1 className="text-3xl font-bold mb-6">Настройки ML-модели</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Layers className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold">Метрики модели</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-1">Точность</p>
              <p className="text-2xl font-bold">{modelMetrics.accuracy * 100}%</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-1">Precision</p>
              <p className="text-2xl font-bold">{modelMetrics.precision * 100}%</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-1">Recall</p>
              <p className="text-2xl font-bold">{modelMetrics.recall * 100}%</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-1">F1 Score</p>
              <p className="text-2xl font-bold">{modelMetrics.f1Score * 100}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Settings className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold">Параметры</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center justify-between">
                <span>Автоматическое обучение</span>
                <button
                  onClick={() => setAutoTrain(!autoTrain)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    autoTrain ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      autoTrain ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </label>
            </div>

            <div>
              <label className="block mb-2">Порог уверенности</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={threshold}
                onChange={(e) => setThreshold(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>0%</span>
                <span>{(threshold * 100).toFixed(0)}%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Database className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold">Данные</h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">Тренировочные данные</p>
                <p className="text-gray-600">125,000 записей</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Обновить
              </button>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">Тестовые данные</p>
                <p className="text-gray-600">25,000 записей</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Обновить
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Zap className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold">Последние обновления</h2>
          </div>

          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                {update.status === 'warning' ? (
                  <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                ) : (
                  <Zap className="w-5 h-5 text-green-500 flex-shrink-0" />
                )}
                <div>
                  <p className="text-sm text-gray-600">{update.date}</p>
                  <p className="font-medium">{update.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLSettingsScreen;