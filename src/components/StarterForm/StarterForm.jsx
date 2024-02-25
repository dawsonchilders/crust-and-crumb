import { useState } from 'react';

export default function StarterForm({ addStarter }) {
  const [starterName, setStarterName] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    addStarter({ name: starterName });
    setStarterName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={starterName}
        onChange={(evt) => setStarterName(evt.target.value)}
        placeholder="Starter Name"
        required
      />
      <button type="submit">Create Starter</button>
    </form>
  );
}