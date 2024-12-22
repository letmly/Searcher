import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks/useAuth';
import { ContentItem } from '../shared/types/content.types';

export default function Home() {
  const { user } = useAuth();
  const [trendingContent, setTrendingContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingContent = async () => {
      try {
        const response = await fetch('/api/content/trending');
        if (!response.ok) {
          throw new Error('Failed to fetch trending content');
        }
        const data = await response.json();
        setTrendingContent(data);
      } catch (error) {
        console.error('Error fetching trending content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingContent();
  }, []);

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Discover Quality Knowledge
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-indigo-200 sm:text-2xl md:mt-5 md:max-w-3xl">
              Access curated content from experts and industry leaders. Start your journey today.
            </p>
            <div className="mt-10 flex justify-center">
              {!user ? (
                <div className="space-x-4">
                  <Link
                    to="/login"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Learn More
                  </Link>
                </div>
              ) : (
                <Link
                  to="/search"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Start Searching
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to access quality knowledge
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="text-lg leading-6 font-medium text-gray-900">Smart Search</div>
                <p className="mt-2 text-base text-gray-500">
                  Advanced search algorithms to help you find exactly what you're looking for.
                </p>
              </div>

              <div className="relative">
                <div className="text-lg leading-6 font-medium text-gray-900">Expert Content</div>
                <p className="mt-2 text-base text-gray-500">
                  Access knowledge directly from industry experts and thought leaders.
                </p>
              </div>

              <div className="relative">
                <div className="text-lg leading-6 font-medium text-gray-900">Quality Assurance</div>
                <p className="mt-2 text-base text-gray-500">
                  All content is verified and rated by our community of users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Content Section */}
      {!loading && trendingContent.length > 0 && (
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Trending Content</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trendingContent.map((content) => (
                <div
                  key={content.id}
                  className="relative flex flex-col bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {content.category}
                        </span>
                      </p>
                      <Link to={`/content/${content.id}`} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{content.title}</p>
                        <p className="mt-3 text-base text-gray-500">{content.description}</p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <span className="text-sm font-medium text-gray-900">${content.price}</span>
                      </div>
                      <div className="ml-3">
                        <div className="flex items-center">
                          {/* Star rating */}
                          <span className="text-sm text-gray-500">
                            Rating: {content.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 