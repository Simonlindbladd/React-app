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
  // Randomly choose a column span between 1 and 3.
  // This will make some images wider than others.
  const colSpan = useMemo(() => Math.floor(Math.random() * 3) + 1, []);

  return (
    <Link 
      to={`/photo/${photo.id}`} 
      className="photo-card" 
      style={{ gridColumn: `span ${colSpan}` }}
    >
      <img src={photo.url} alt={photo.title} />
    </Link>
  );
};

export default PhotoCard;
