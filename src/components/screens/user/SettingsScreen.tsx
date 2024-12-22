import React, { useState } from 'react';
import { Bell, Lock, User, Globe, Moon } from 'lucide-react';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('ru');

  return (
    <div className="p-8 bg-gray-100 h-full">
      <h1 className="text-3xl font-bold mb-6">Настройки</h1>

      <div className="max-w-3xl">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex items-center mb-4">
              <User className="w-5 h-5 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Профиль</h2>
            </div>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Имя пользователя
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  defaultValue="user123"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-lg"
                  defaultValue="user@example.com"
                />
              </div>
            </div>
          </div>

          <div className="p-6 border-b">
            <div className="flex items-center mb-4">
              <Bell className="w-5 h-5 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Уведомления</h2>
            </div>
            <div className="flex items-center justify-between">
              <span>Включить уведомления</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="p-6 border-b">
            <div className="flex items-center mb-4">
              <Globe className="w-5 h-5 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Язык</h2>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="p-6 border-b">
            <div className="flex items-center mb-4">
              <Moon className="w-5 h-5 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Тема</h2>
            </div>
            <div className="flex items-center justify-between">
              <span>Темный режим</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center mb-4">
              <Lock className="w-5 h-5 text-blue-600 mr-3" />
              <h2 className="text-xl font-semibold">Безопасность</h2>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Изменить пароль
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;