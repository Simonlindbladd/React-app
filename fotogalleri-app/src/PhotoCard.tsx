import { Link } from 'react-router-dom';

interface Photo {
  id: number;
  title: string;
  url: string;
}

interface Props {
  photo: Photo;
}

const PhotoCard = ({ photo }: Props) => {
  return (
    <div className="photo-card">
      <img src={photo.url} alt={photo.title} style={{ width: '100%' }} />
      <h3>{photo.title}</h3>
      <Link to={`/photo/${photo.id}`}>Visa detaljer</Link>
    </div>
  );
};

export default PhotoCard;
