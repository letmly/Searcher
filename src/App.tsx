import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from './shared/layouts/MainLayout.tsx';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home.tsx'));
const Search = lazy(() => import('./pages/Search.tsx'));
const PartnerDashboard = lazy(() => import('./pages/PartnerDashboard.tsx'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard.tsx'));
const ContentDetails = lazy(() => import('./pages/ContentDetails.tsx'));
const UserProfile = lazy(() => import('./pages/UserProfile.tsx'));

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/partner/dashboard" element={<PartnerDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/content/:id" element={<ContentDetails />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;