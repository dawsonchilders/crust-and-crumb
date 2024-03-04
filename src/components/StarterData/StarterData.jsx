import { useState, useEffect } from "react";
import * as startersApi from '../../utilities/starters-api';
import MyStartersPage from '../../pages/MyStartersPage/MyStartersPage';

export default function StarterData({ user }) {
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
  };

  async function updateStarter(starterId, updatedData) {
    const updatedStarter = await startersApi.updateStarter(starterId, updatedData);
    setStarters(prevStarters => 
      prevStarters.map(starter => starter._id === starterId ? updatedStarter : starter)
    );
  };

  async function deleteStarter(starterId) {
    await startersApi.deleteStarter(starterId);
    setStarters(prevStarters => 
      prevStarters.filter(starter => starter._id !== starterId)
    );
  }

  return (
    <>
      <MyStartersPage 
        starters={starters}
        addStarter={addStarter}
        updateStarter={updateStarter}
        deleteStarter={deleteStarter}
      />
    </>
  )
}