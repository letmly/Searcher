import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SearchResult } from '../shared/types/content.types';
import { useAuth } from '../features/auth/hooks/useAuth';
import { mockSearchResults } from '../shared/mockData';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;

    setLoading(true);
    // Имитация задержки сети
    setTimeout(() => {
      setResults(mockSearchResults.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase()) ||
        result.category.toLowerCase().includes(query.toLowerCase())
      ));
      setLoading(false);
    }, 500);
  }, [query]);

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Поиск знаний</h1>
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Введите ключевые слова для поиска..."
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <div className="mt-2 flex gap-2">
                <button className="text-sm text-gray-600 hover:text-indigo-600">Машинное обучение</button>
                <button className="text-sm text-gray-600 hover:text-indigo-600">Бизнес</button>
                <button className="text-sm text-gray-600 hover:text-indigo-600">Data Science</button>
              </div>
            </div>
            <button
              onClick={handleSearch}
              disabled={loading}
              className="px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {loading ? 'Поиск...' : 'Найти'}
            </button>
          </div>
        </div>
      </div>

      {/* Search Filters */}
      <div className="bg-white shadow-sm rounded-lg p-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-700">Фильтры:</span>
          <select className="rounded-md border-gray-300 text-sm">
            <option>Все категории</option>
            <option>Машинное обучение</option>
            <option>Бизнес</option>
            <option>Data Science</option>
          </select>
          <select className="rounded-md border-gray-300 text-sm">
            <option>Любая цена</option>
            <option>До $50</option>
            <option>$50 - $100</option>
            <option>Более $100</option>
          </select>
          <select className="rounded-md border-gray-300 text-sm">
            <option>По релевантности</option>
            <option>По рейтингу</option>
            <option>По цене (возр.)</option>
            <option>По цене (убыв.)</option>
          </select>
        </div>
      </div>

      {/* Search Results */}
      {results.length > 0 && (
        <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
          {results.map((result) => (
            <div key={result.contentId} className="p-6 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <Link to={`/content/${result.contentId}`} className="block">
                    <h3 className="text-lg font-medium text-gray-900 hover:text-indigo-600">
                      {result.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {result.description}
                    </p>
                    <div className="mt-2 flex items-center gap-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {result.category}
                      </span>
                      <span className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {result.partnerRating.toFixed(1)}
                      </span>
                      <span className="text-sm text-gray-500">
                        Релевантность: {(result.relevanceScore * 100).toFixed()}%
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="ml-4 flex flex-col items-end">
                  <span className="text-lg font-medium text-gray-900">
                    ${result.price}
                  </span>
                  {user && (
                    <Link
                      to={`/content/${result.contentId}`}
                      className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                    >
                      Подробнее
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {results.length === 0 && query && !loading && (
        <div className="text-center py-12 bg-white shadow-sm rounded-lg">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Ничего не найдено</h3>
          <p className="mt-1 text-sm text-gray-500">
            Попробуйте изменить поисковый запрос или фильтры
          </p>
        </div>
      )}
    </div>
  );
} 