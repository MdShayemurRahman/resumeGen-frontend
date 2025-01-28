import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PageNotFoundPage from './pages/PageNotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile/:id' element={<HomePage />} />
        <Route path='*' element={<PageNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
