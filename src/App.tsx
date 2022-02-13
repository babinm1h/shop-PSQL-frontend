import React from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;