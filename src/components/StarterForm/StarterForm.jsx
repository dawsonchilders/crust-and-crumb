import { useState, useEffect } from 'react';
import './StarterForm.css'

export default function StarterForm({ onSubmit, initialData = null }) {
  const [starterData, setStarterData] = useState({
    name: '',
    notes: '',
    feedingSchedule: '',
  });

  useEffect(() => {
    if (initialData) {
      setStarterData({
        name: initialData.name,
        notes: initialData.notes,
        flours: initialData.flours,
        feedingSchedule: initialData.feedingSchedule,
      });
    } else {
      setStarterData({ 
        name: '', 
        notes: '', 
        flours: '',
        feedingSchedule: '', 
      })
    }
  }, [initialData]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
      setStarterData(prevData => ({
      ...prevData,
      [name]: value,
    }));
   };
  

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    onSubmit(starterData);
    setStarterData({name: '', notes: '', flours: ''});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name"
        type="text" 
        value={starterData.name} 
        onChange={handleChange} 
        placeholder="Starter Name" 
        required 
      />
      <textarea 
        name="notes"
        value={starterData.notes}
        onChange={handleChange}
        placeholder="Notes"
      />
      <input
        name="flours"
        type="text"
        value={starterData.flours}
        onChange={handleChange}
        placeholder="Flours Used"
      />
      <select 
        name="feedingSchedule"
        value={starterData.feedingSchedule}
        onChange={handleChange}
      >
        <option value="">Select Feeding Schedule</option>
        <option value="8 hours">Every 8 hours</option>
        <option value="10 hours">Every 10 hours</option>
        <option value="12 hours">Every 12 hours</option>
        <option value="Weekly">Every week</option>
        <option value="Bi-Weekly">Every 2 weeks</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}