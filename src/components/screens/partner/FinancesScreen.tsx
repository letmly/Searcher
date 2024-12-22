import React from 'react';
import { DollarSign, TrendingUp, Download, Upload } from 'lucide-react';

const FinancesScreen = () => {
  const transactions = [
    {
      id: 1,
      date: '15 марта 2024',
      description: 'Оплата за использование данных',
      amount: 1250.00,
      type: 'income'
    },
    {
      id: 2,
      date: '10 марта 2024',
      description: 'Комиссия за API доступ',
      amount: 450.00,
      type: 'income'
    },
    {
      id: 3,
      date: '5 марта 2024',
      description: 'Вывод средств',
      amount: 1500.00,
      type: 'withdrawal'
    }
  ];

  return (
    <div className="p-8 bg-gray-100 h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Финансы</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Вывести средства
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600">Баланс</p>
              <p className="text-2xl font-bold">$2,450.00</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <Download className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600">Доход за месяц</p>
              <p className="text-2xl font-bold">$1,700.00</p>
              <p className="text-green-600 text-sm">▲ 12.5%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <Upload className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600">Выведено за месяц</p>
              <p className="text-2xl font-bold">$1,500.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">История транзакций</h2>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-600">{transaction.date}</p>
                </div>
                <p className={`font-semibold ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Источники дохода</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Использование данных</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>API доступ</span>
                <span>25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '25%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Реферальная программа</span>
                <span>15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '15%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancesScreen;