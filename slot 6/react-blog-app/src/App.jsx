import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import AppNavbar from './component/AppNavbar';
import Home from './pages/Home';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import RegistrationForm from './component/RegistrationForm';
import LoginForm from './component/LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      {isLoggedIn && <AppNavbar onLogout={handleLogout} />}
      <Routes>
        <Route 
          path='/login' 
          element={!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <Navigate to="/" replace />} 
        />
        <Route 
          path='/register' 
          element={!isLoggedIn ? <RegistrationForm onRegister={handleLogin} /> : <Navigate to="/" replace />} 
        />
        <Route path='/' element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
        <Route path='/posts' element={isLoggedIn ? <PostList /> : <Navigate to="/login" replace />} />
        <Route path='/posts/:id' element={isLoggedIn ? <PostDetail /> : <Navigate to="/login" replace />} />
        <Route path='/about' element={isLoggedIn ? <About /> : <Navigate to="/login" replace />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;