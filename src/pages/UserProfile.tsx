import { useState, useEffect } from 'react';
import { useAuth } from '../features/auth/hooks/useAuth';
import { UserAnalytics } from '../shared/types/user.types';
import { ContentItem } from '../shared/types/content.types';

interface PurchaseHistory {
  content: ContentItem;
  purchaseDate: Date;
  price: number;
}

export default function UserProfile() {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState<UserAnalytics | null>(null);
  const [purchaseHistory, setPurchaseHistory] = useState<PurchaseHistory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [analyticsResponse, purchasesResponse] = await Promise.all([
          fetch('/api/user/analytics', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          }),
          fetch('/api/user/purchases', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          }),
        ]);

        if (!analyticsResponse.ok || !purchasesResponse.ok) {
          throw new Error('Failed to fetch user data');
        }

        const [analyticsData, purchasesData] = await Promise.all([
          analyticsResponse.json(),
          purchasesResponse.json(),
        ]);

        setAnalytics(analyticsData);
        setPurchaseHistory(purchasesData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="space-y-6">
        {/* User Info */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            {user.subscription && (
              <div className="ml-auto">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {user.subscription.status === 'trial' ? 'Trial' : 'Active'} Subscription
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  Expires: {new Date(user.subscription.endDate).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* User Interests */}
        {analytics && (
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Your Interests</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {analytics.interests.map((interest) => (
                <div
                  key={interest.category}
                  className="bg-gray-50 rounded-lg p-4 flex justify-between items-center"
                >
                  <span className="text-sm font-medium text-gray-900">{interest.category}</span>
                  <div className="ml-2 flex-shrink-0">
                    <div className="relative h-2 w-24 bg-gray-200 rounded">
                      <div
                        className="absolute h-2 bg-indigo-600 rounded"
                        style={{ width: `${interest.weight * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Purchase History */}
        {purchaseHistory.length > 0 && (
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Purchase History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Content
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Purchase Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {purchaseHistory.map((purchase) => (
                    <tr key={`${purchase.content.id}-${purchase.purchaseDate}`}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {purchase.content.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {purchase.content.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(purchase.purchaseDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${purchase.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Recent Searches */}
        {analytics && analytics.searchHistory.length > 0 && (
          <div className="bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Searches</h2>
            <div className="space-y-4">
              {analytics.searchHistory.slice(0, 5).map((search, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">{search.query}</p>
                    <p className="text-xs text-gray-500">{search.category}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(search.timestamp).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 