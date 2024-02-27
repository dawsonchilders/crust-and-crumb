import { useState } from 'react';

export default function StarterForm({ addStarter }) {
  const [starterData, setStarterData] = useState({
    name: '',
    notes: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setStarterData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (evt) => {
    evt.preventDefault();
    addStarter(starterData);
    setStarterData({name: '', notes: ''});
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
      <button type="submit">Create Starter</button>
    </form>
  );
}