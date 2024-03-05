import { useState, useEffect } from 'react';
import './StarterForm.css'

export default function StarterForm({ onSubmit, initialData = null }) {
  const [starterData, setStarterData] = useState({
    name: '',
    notes: '',
    feedingSchedule: '',
    createdOn: '',
  });

  useEffect(() => {
    if (initialData) {
      setStarterData({
        name: initialData.name,
        notes: initialData.notes,
        flours: initialData.flours,
        feedingSchedule: initialData.feedingSchedule,
        createdOn: initialData.createdOn,
      });
    } else {
      setStarterData({
        name: '',
        notes: '',
        flours: '',
        feedingSchedule: '',
        createdOn: '',
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
    setStarterData({ name: '', notes: '', flours: '', createdOn: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        name="name"
        type="text"
        value={starterData.name}
        onChange={handleChange}
        required
      />
      <label>Notes</label>
      <textarea
        name="notes"
        value={starterData.notes}
        onChange={handleChange}
      />
      <label>Flours Used</label>
      <input
        name="flours"
        type="text"
        value={starterData.flours}
        onChange={handleChange}
      />
      <label>Feeding Schedule</label>
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
      <label>Created On Date</label>
      <input
        type="date"
        name="createdOn"
        value={starterData.createdOn}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}