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
            <div className="starter-name"><span className="starter-label">Name:</span>{starter.name}</div>
            <div className="starter-flours"><span className="starter-label">Flours Used:</span> {starter.flours}</div>
            <div className="starter-schedule"><span className="starter-label">Feeding Schedule:</span> {starter.feedingSchedule}</div>
            <div className="starter-created"><span className="starter-label">Created On Date:</span> {starter.createdOn && new Date(starter.createdOn).toDateString()}</div>
            <div className="starter-notes"><span className="starter-label">Notes: </span> {starter.notes}</div>
            <div className="starter-actions">
              {editStarterId !== starter._id && (
                <>
                  <button onClick={() => deleteStarter(starter._id)}>Delete</button>
                  <button onClick={() => setEditStarterId(starter._id)}>Edit</button>
                </>
              )}
              {editStarterId === starter._id && (
                <StarterForm initialData={starter} onSubmit={(formData) => updateStarter(starter._id, formData)} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
