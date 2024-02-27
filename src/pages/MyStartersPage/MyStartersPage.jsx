import { useState, useEffect } from 'react';
import StarterForm from '../../components/StarterForm/StarterForm';
import * as startersApi from '../../utilities/starters-api';


export default function MyStartersPage() {
  const [starters, setStarters] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchStarters = async () => {
      const data = await startersApi.getAll();
      setStarters(data);
    };
    fetchStarters();
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  const addStarter = async (starter) => {
    const newStarter = await startersApi.createStarter(starter);
    setStarters([...starters, newStarter]);
    setShowForm(false);
  };

  const deleteStarter = async (starterId) => {
    await startersApi.deleteStarter(starterId);
    setStarters(starters.filter(starter => starter._id !== starterId));
  };

  return (
    <div>
      <h1>My Starters</h1>
      <button onClick={toggleForm}>{showForm ? 'Hide Form' : 'Add Starter'}</button>
      {showForm && <StarterForm addStarter={addStarter} />}
      {starters.map((starter) => (
         <div key={starter._id}>
           <div>{starter.name}</div>
           <div>{starter.notes}</div>
           <button onClick={() => deleteStarter(starter._id)}>Delete</button>
           
         </div>
      ))}
    </div>
  );
}