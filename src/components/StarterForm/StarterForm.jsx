import { useState } from 'react';

export default function StarterForm({ addStarter }) {
  const [starterData, setStarterData] = useState({
    name: '',
    notes: '',
    createdOn: '',
    feedingSchedule: '',
    hydrationLevel: 100,
    flourType: ''
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    addStarter({
      ...starterData,
      notes: starterData.notes ? [starterData.notes] : []
    });
    setStarterData({ name: '', notes: '', createdOn: '', feedingSchedule: '', hydrationLevel: 100, flourType: '' });
  };

  const handleChange = (evt) => {
    setStarterData({ ...starterData, [evt.target.name]: evt.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" value={starterData.name} onChange={handleChange} placeholder="Starter Name" required />
      <textarea name="notes" value={starterData.notes} onChange={handleChange} placeholder="Notes"></textarea>
      <input name="createdOn" type="date" value={starterData.createdOn} onChange={handleChange}  />
      <select name="feedingSchedule" value={starterData.feedingSchedule} onChange={handleChange}>
        <option value="">Select Feeding Schedule</option>
        <option value="24h">Every 24 hours</option>
        <option value="12h">Every 12 hours</option>
      </select>
      <input name="hydrationLevel" type="number" value={starterData.hydrationLevel} onChange={handleChange} />
      <select name="flourType" value={starterData.flourType} onChange={handleChange}>
        <option value="AP White">AP White Flour</option>
        <option value="Bread Flour">Bread Flour</option>
        <option value="Dark Rye Flour">Dark Rye Flour</option>
        <option value="Whole Wheat">Whole Wheat Flour</option>
      </select>
      <button type="submit">Create Starter</button>
    </form>
  );
}