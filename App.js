import React, { useState } from 'react';
import LoginScreen from './components/screens/login/Login';
import Navigation from './Navigation';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <Navigation />;
};

export default App;
