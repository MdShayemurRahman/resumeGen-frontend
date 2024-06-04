import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { EditProfilePage, LoginPage, PageNotFoundPage } from './pages';
import HomePage from './pages/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile/:id' element={<HomePage />} />
        <Route path='/profile/edit/:id' element={<EditProfilePage />} />
        <Route path='*' element={<PageNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;