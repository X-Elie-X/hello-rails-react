import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Messages from './Messages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
