import { useState, useEffect, useCallback } from 'react';
import { User } from '../../../shared/types/user.types';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  const login = useCallback(async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      // TODO: Implement actual API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }

      const user = await response.json();
      setState(prev => ({ ...prev, user, loading: false }));
      localStorage.setItem('token', user.token);
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'An error occurred',
        loading: false,
      }));
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setState({ user: null, loading: false, error: null });
  }, []);

  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setState(prev => ({ ...prev, loading: false }));
      return;
    }

    try {
      // TODO: Implement actual API call
      const response = await fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const user = await response.json();
      setState({ user, loading: false, error: null });
    } catch (error) {
      localStorage.removeItem('token');
      setState({
        user: null,
        loading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return {
    user: state.user,
    loading: state.loading,
    error: state.error,
    login,
    logout,
    checkAuth,
  };
} 