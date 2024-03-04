import './PhotoCard.css';

export default function PhotoCard({ photo, onDelete }) {
  const handleDelete = () => onDelete(photo._id);


  return (
    <article className="photo-card">
      <img src={photo.url} alt={photo.title} />
      <div>{photo.title}</div>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
}