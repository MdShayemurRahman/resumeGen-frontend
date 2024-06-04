import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage, PageNotFoundPage } from './pages';
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/profile/:id'
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<PageNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
