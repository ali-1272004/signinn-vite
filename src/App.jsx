
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import BookingTrackerPage from './pages/BookingTrackerPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/check-status" element={<BookingTrackerPage />} />
        <Route path="*" element={<RegistrationPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;