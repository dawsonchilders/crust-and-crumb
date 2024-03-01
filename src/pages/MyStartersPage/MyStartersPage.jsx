import { useState, useEffect } from 'react';
import StarterForm from '../../components/StarterForm/StarterForm';
import './MyStartersPage.css'


export default function MyStartersPage({ starters, addStarter, updateStarter, deleteStarter }) {
  const [showForm, setShowForm] = useState(false);
  const [editStarterId, setEditStarterId] = useState(null);

  useEffect(() => {
    setShowForm(false);
    setEditStarterId(null);
  }, [starters]);

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditStarterId(null);
  }

  return (
    <div>
      <h1>My Starters</h1>
      <button onClick={toggleForm}>{showForm ? 'Hide' : 'Add Starter'}</button>
      {showForm && <StarterForm onSubmit={addStarter} />}
      <div className="starters-container">
        {starters.map((starter) => (
          <div key={starter._id} className="starter-box">
            <label>Name</label>
            <div>{starter.name}</div>
            {starter.notes && 
            <>
              <label>Notes</label>
              <div>{starter.notes}</div>
            </>}
            {starter.flours && 
            <>
              <label>Flours Used</label>
              <div>{starter.flours}</div>
            </>}
            {starter.feedingSchedule && 
            <>
              <label>Feeding Schedule</label>
              <div>{starter.feedingSchedule}</div>
            </>}
            {starter.createdOn && 
            <>
              <label>Created On Date</label>
              <div>{starter.createdOn && new Date(starter.createdOn).toDateString()}</div>
            </>}
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
