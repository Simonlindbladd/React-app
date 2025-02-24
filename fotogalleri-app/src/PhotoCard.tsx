import { Link } from 'react-router-dom';
import { useMemo } from 'react';

interface Photo {
  id: number;
  title: string;
  url: string;
}

interface Props {
  photo: Photo;
}

const PhotoCard = ({ photo }: Props) => {
  // Generera en slumpmässig rotation mellan -5 och 5 grader
  const rotation = useMemo(() => Math.random() * 10 - 5, []);

  return (
    <div
      className="photo-card"
      style={{
        transform: `rotate(${rotation}deg)`,
        border: '2px solid red', // Inline debug-stil för att se boxen
      }}
    >
      <img src={photo.url} alt={photo.title} />
      <div style={{ padding: '0.5rem' }}>
        <h3>{photo.title}</h3>
        <Link to={`/photo/${photo.id}`}>Visa detaljer</Link>
      </div>
    </div>
  );
};

export default PhotoCard;
