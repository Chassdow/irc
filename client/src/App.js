import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Chat from './components/Chat'

const App = () =>{
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Chat/>} />
        </Routes>
    </Router>
  );
}

export default App;
