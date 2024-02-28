import { useState, useEffect } from 'react';
import StarterForm from '../../components/StarterForm/StarterForm';
import './MyStartersPage.css'
import * as startersApi from '../../utilities/starters-api';


export default function MyStartersPage() {
  const [starters, setStarters] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editStarterId, setEditStarterId] = useState(null);

  useEffect(() => {
    const fetchStarters = async () => {
      const data = await startersApi.getAll();
      setStarters(data);
    };
    fetchStarters();
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditStarterId(null);
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

  const updateStarter = async (starterId, updatedData) => {
    const updatedStarter = await startersApi.updateStarter(starterId, updatedData);
    setStarters(starters.map(starter => starter._id === starterId ? updatedStarter : starter));
    setEditStarterId(null);
  }

  return (
    <div>
      <h1>My Starters</h1>
      <button onClick={toggleForm}>{showForm ? 'Hide' : 'Add Starter'}</button>
      {showForm && <StarterForm onSubmit={addStarter} />}
      <div className="Starters-Container">
        {starters.map((starter) => (
          <div key={starter._id} className="Starter-Box">
            <div>{starter.name}</div>
            <div>{starter.notes}</div>
            <div>{starter.flours}</div>
            <button onClick={() => deleteStarter(starter._id)}>Delete</button>
            <button onClick={() => setEditStarterId(starter._id)}>Edit</button>
            {editStarterId === starter._id && (
              <StarterForm initialData={starter} onSubmit={(formData) => updateStarter(starter._id, formData)} />
            )}
          </div>
      ))}
      </div>
    </div>
  );
}