import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as startersApi from '../../utilities/starters-api';
import AuthPage from '../AuthPage/AuthPage';
import MyPhotosPage from '../MyPhotosPage/MyPhotosPage';
import MyStartersPage from '../MyStartersPage/MyStartersPage';
import HomePage from './HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [starters, setStarters] = useState([]);

  useEffect(() => {
    const fetchStarters = async () => {
      if (user) {
      const fetchedStarters = await startersApi.getAll();
      setStarters(fetchedStarters);
     }
    };
    fetchStarters();
  }, [user]);


  async function addStarter(starter) {
    const newStarter = await startersApi.createStarter(starter);
    setStarters(prevStarters => [newStarter, ...prevStarters]);
  }

  async function updateStarter(starterId, updatedData) {
    const updatedStarter = await startersApi.updateStarter(starterId, updatedData);
    setStarters(prevStarters => 
      prevStarters.map(starter => starter._id === starterId ? updatedStarter : starter)
    );
  }
  
  async function deleteStarter(starterId) {
    await startersApi.deleteStarter(starterId);
    setStarters(prevStarters => 
      prevStarters.filter(starter => starter._id !== starterId)
    );
  }
  
  return (
    <main className="App">
      <div className="banner">CRUST & CRUMB</div>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {user ?
          <>
            <Route path="/starters" element={<MyStartersPage starters={starters} addStarter={addStarter} updateStarter={updateStarter} deleteStarter={deleteStarter} />} />
            <Route path="/photos" element={<MyPhotosPage />} />
            <Route path="/*" element={<Navigate to="/starters" /> }/>
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
