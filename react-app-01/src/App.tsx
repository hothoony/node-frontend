import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, NavLink, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Member from './pages/member/Member';
import Error404 from './pages/Error404';
import MainLayout from './layout/MainLayout';
import ErrorLayout from './layout/ErrorLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout 사용 */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/member' element={<Member />} />
        </Route>
        {/* ErrorLayout 사용 */}
        <Route element={<ErrorLayout />}>
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
