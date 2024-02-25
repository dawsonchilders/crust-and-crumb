import { useState, useEffect } from 'react';
import StarterForm from '../../components/StarterForm/StarterForm';
import * as startersApi from '../../utilities/starters-api';


export default function MyStartersPage() {
  const [starters, setStarters] = useState([]);

  useEffect(() => {
    const fetchStarters = async () => {
      const data = await startersApi.getAll();
      setStarters(data);
    };
    fetchStarters();
  }, []);

  const addStarter = async (starter) => {
    const newStarter = await startersApi.createStarter(starter);
    setStarters([...starters, newStarter]);
  };

  return (
    <div>
      <StarterForm addStarter={addStarter} />
      {starters.map((starter) => (
        <div key={starter._id}>{starter.name}</div>
      ))}
    </div>
  );
}