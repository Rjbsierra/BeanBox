import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/landingpage/dashboard';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>

       
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
