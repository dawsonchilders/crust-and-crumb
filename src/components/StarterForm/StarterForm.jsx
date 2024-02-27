import { useState, useEffect } from 'react';

export default function StarterForm({ onSubmit, initialData = null }) {
  const [starterData, setStarterData] = useState({
    name: '',
    notes: '',
  });

  useEffect(() => {
    if (initialData) {
      setStarterData({
        name: initialData.name,
        notes: initialData.notes,
      });
    } else {
      setStarterData({ name: '', notes: '' })
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
      <button type="submit">Add</button>
    </form>
  );
}