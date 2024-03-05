import { useState, useEffect } from 'react';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import PhotoUploadForm from '../../components/PhotoUpLoadForm/PhotoUpLoadForm';
import * as photosAPI from '../../utilities/photos-api';
import './MyPhotosPage.css';

export default function MyPhotosPage() {
  const [photos, setPhotos] = useState([]);

  useEffect(function () {
    photosAPI.getAll().then(photos => setPhotos(photos));
  }, []);

  function handleUploadSuccess(newPhoto) {
    setPhotos([newPhoto, ...photos]);
  }

  async function handleDelete(photoId) {
    await photosAPI.deletePhoto(photoId);
    setPhotos(prevPhotos => prevPhotos.filter(photo => photo._id !== photoId));
  }

  return (
    <div>
      <h1>My Photos</h1>
      <div className="my-photos-container">
        <PhotoUploadForm onUploadSuccess={handleUploadSuccess} />
        <div className="photo-gallery">
          {photos.map(photo => <PhotoCard key={photo._id} photo={photo} onDelete={handleDelete} />)}
        </div>
      </div>
    </div>
  );
}