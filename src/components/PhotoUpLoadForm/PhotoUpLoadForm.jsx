import { useState, useRef } from 'react';
import * as photosAPI from '../../utilities/photos-api';
import './PhotoUpLoadForm.css';

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
    <div className="photo-upload-container">
    <section className="photo-upload-box">
      <input type="file" ref={fileInputRef} className="file-input" />
      <input value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Photo Title" className="text-input" />
      <button onClick={handleUpload} className="upload-btn">Upload Photo</button>
    </section>
    </div>
  );
}