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

  const deleteStarter = async (starterId) => {
    await startersApi.deleteStarter(starterId);
    setStarters(starters.filter(starter => starter._id !== starterId));
  };

  return (
    <div>
      <StarterForm addStarter={addStarter} />
      {starters.map((starter) => (
         <div key={starter._id}>
           {starter.name}
           <button onClick={() => deleteStarter(starter._id)}>Delete</button>
           
         </div>
      ))}
    </div>
  );
}