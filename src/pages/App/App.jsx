import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import MyPhotosPage from '../MyPhotosPage/MyPhotosPage';
import StarterData from '../../components/StarterData/StarterData';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <div className="banner">CRUST & CRUMB</div>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {user ?
          <>
            <Route path="/starters" element={<StarterData user={user} />} />
            <Route path="/photos" element={<MyPhotosPage />} />
            <Route path="/*" element={<Navigate to="/starters" />} />
          </>
          :
          <>
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        }
      </Routes>
    </main>
  );
}
