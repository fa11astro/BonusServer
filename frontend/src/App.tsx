import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
import { Comment } from './pages/Comment';
import { EnterAccaunt } from './pages/EnterAccaunt';
import { Exercises } from './pages/Exercises';
import { Home } from './pages/Home';
import { Levels } from './pages/Levels';
import { Registration } from './pages/Registration';
import { Shop } from './pages/Shop';
import { Transfers } from './pages/Transfers';
import { UserProfile } from './pages/UserProfile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/enter" element={<EnterAccaunt />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/ex" element={<Exercises />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/ex" element={<Exercises />} />
        <Route path="/achieve" element={<Levels />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;