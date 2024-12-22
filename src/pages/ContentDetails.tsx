import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../features/auth/hooks/useAuth';
import { ContentItem, Review } from '../shared/types/content.types';

export default function ContentDetails() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [content, setContent] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [submittingReview, setSubmittingReview] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/content/${id}`, {
          headers: user
            ? { Authorization: `Bearer ${localStorage.getItem('token')}` }
            : undefined,
        });
        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [id, user]);

  const handlePurchase = async () => {
    if (!user) {
      // Redirect to login
      return;
    }

    try {
      const response = await fetch(`/api/content/${id}/purchase`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Purchase failed');
      }

      // Handle successful purchase (e.g., show success message, update UI)
    } catch (error) {
      console.error('Purchase error:', error);
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSubmittingReview(true);
    try {
      const response = await fetch(`/api/content/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          rating,
          comment: reviewText,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      // Update content with new review
      const updatedContent = await response.json();
      setContent(updatedContent);
      setReviewText('');
      setRating(5);
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setSubmittingReview(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="space-y-6">
        {/* Content Header */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{content.title}</h1>
              <div className="mt-2 flex items-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  {content.category}
                </span>
                <span className="ml-4 text-sm text-gray-500">
                  Rating: {content.rating.toFixed(1)}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">${content.price}</p>
              {user && (
                <button
                  onClick={handlePurchase}
                  className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Purchase
                </button>
              )}
            </div>
          </div>
          <p className="mt-4 text-gray-600">{content.description}</p>
        </div>

        {/* Reviews Section */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h2>

          {/* Review Form */}
          {user && (
            <form onSubmit={handleSubmitReview} className="mb-8">
              <div className="space-y-4">
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                    Rating
                  </label>
                  <select
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <option key={value} value={value}>
                        {value} Star{value !== 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="review" className="block text-sm font-medium text-gray-700">
                    Review
                  </label>
                  <textarea
                    id="review"
                    rows={4}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Write your review..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submittingReview}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  {submittingReview ? 'Submitting...' : 'Submit Review'}
                </button>
              </div>
            </form>
          )}

          {/* Reviews List */}
          <div className="space-y-6">
            {content.reviews.map((review: Review) => (
              <div key={review.id} className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Rating: {review.rating} / 5
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-700">
                  <p>{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 