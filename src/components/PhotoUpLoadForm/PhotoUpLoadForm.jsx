import { useState, useRef } from 'react';
import * as photosAPI from '../../utilities/photos-api';

export default function PhotoUploadForm({ onUploadSuccess }) {
  const [title, setTitle] = useState('');
  const fileInputRef = useRef();

  
  async function handleUpload() {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('photo', fileInputRef.current.files[0]);
    try {
      const newPhoto = await photosAPI.upload(formData);
      onUploadSuccess(newPhoto);
      setTitle('');
      fileInputRef.current.value = '';
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  }


  return (
    <div>
    <section className="flex-ctr-ctr">
      <input type="file" ref={fileInputRef} />
      <input value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Photo Title" />
      <button onClick={handleUpload}>Upload Photo</button>
    </section>
    </div>

  );
}