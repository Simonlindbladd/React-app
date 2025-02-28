import { Link } from 'react-router-dom';

interface Photo {
  id: number;
  title: string;
  url: string;
}

interface Props {
  photo: Photo;
}

const getColSpan = (id: number) => {
  return (id % 3) + 1;
};

const PhotoCard = ({ photo }: Props) => {
  const colSpan = getColSpan(photo.id);

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
