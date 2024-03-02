import { useState, useEffect } from 'react';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import PhotoUploadForm from '../../components/PhotoUpLoadForm/PhotoUpLoadForm';
import * as photosAPI from '../../utilities/photos-api';

export default function MyPhotosPage() {
  const [photos, setPhotos] = useState([]);

  useEffect(function() {
    photosAPI.getAll().then(photos => setPhotos(photos));
  }, []);

  function handleUploadSuccess(newPhoto) {
    setPhotos([newPhoto, ...photos]);
  }

  return (
    <div>
      <h1>My Photos</h1>
      <PhotoUploadForm onUploadSuccess={handleUploadSuccess} />
      <div className="photo-gallery">
        {photos.map(photo => <PhotoCard key={photo._id} photo={photo} />)}
      </div>
    </div>
  );
}