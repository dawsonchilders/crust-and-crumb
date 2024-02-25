import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MyBakesPage from '../MyBakesPage/MyBakesPage';
import MyStartersPage from '../MyStartersPage/MyStartersPage';
import HomePage from './HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={user ? <Navigate replace to="/starters" /> : <AuthPage setUser={setUser} />} />
        <Route path="/starters" element={user ? <MyStartersPage /> : <Navigate replace to="/login" />} />
        <Route path="/bakes" element={user ? <MyBakesPage /> : <Navigate replace to="/login" />} />
      </Routes>
    </main>
  );
}
